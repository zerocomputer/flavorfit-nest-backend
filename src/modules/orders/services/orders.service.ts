import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services";
import { CreateOrderInput, FindAllOrderInput, FindOneOrderInput, UpdateOrderInput } from "../dto";
import { OrderIngredientCreateManyOrderInput, OrderRecipeCreateManyOrderInput } from "prisma/generated/prisma/models";

@Injectable()
export class OrdersService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    /**
     * Оформление заказа
     * @param customerId 
     * @param param1 
     * @returns 
     */
    async create(customerId: string, { ingredients, recipes, ...input }: CreateOrderInput) {
        let cost = 0;

        const recipeToOrders = await this.prismaService.recipe.findMany({
            where: {
                id: {
                    in: recipes?.map(r => r.recipeId),
                }
            },
        });

        for (let recipe of recipeToOrders) {
            const recipeDetails = recipes?.find(i => i.recipeId === recipe.id);
            if (!recipeDetails) continue;
            cost += recipeDetails.units * recipe.price;
        }

        const ingredientsToOrders = await this.prismaService.ingredient.findMany({
            where: {
                id: {
                    in: recipes?.map(r => r.recipeId),
                }
            },
        });

        for (let ingredient of ingredientsToOrders) {
            const ingredientDetails = ingredients?.find(i => i.ingredientId === ingredient.id);
            if (!ingredientDetails) continue;
            cost += ingredientDetails.units * ingredient.price;
        }

        return this.prismaService.order.create({
            data: {
                cost,
                ...input,
                customerId,
                orderRecipes: {
                    createMany: {
                        data: (recipes || []).map((rec) => {
                            const recipe = recipeToOrders.find(r => r.id === rec.recipeId);
                            return {
                                ...rec,
                                costPerUnit: recipe?.price ?? 0,
                            } as OrderRecipeCreateManyOrderInput;
                        })
                    }
                },
                orderIngredients: {
                    createMany: {
                        data: (ingredients || []).map((rec) => {
                            const ingredient = ingredientsToOrders.find(r => r.id === rec.ingredientId);
                            return {
                                ...rec,
                                costPerUnit: ingredient?.price ?? 0,
                            } as OrderIngredientCreateManyOrderInput;
                        })
                    }
                }
            },
            include: {
                orderRecipes: true,
                orderIngredients: true
            }
        })
    }

    /**
     * Получение одного заказа
     * @param input 
     * @returns 
     */
    async findOne(input: FindOneOrderInput) {
        return this.prismaService.order.findFirst({
            where: input,
            include: {
                orderRecipes: true,
                orderIngredients: true
            }
        })
    }

    /**
     * Получение заказов с пагинацией
     * @param param0 
     * @returns 
     */
    async findAll(customerId: string, { skip, take, closed, ...input }: FindAllOrderInput) {
        return this.prismaService.order.findMany({
            where: {
                ...input,
                customerId,
                closedAt:
                    closed === true ? {
                        not: null,
                    } :
                        closed === false ? {
                            equals: null,
                        } :
                            {}
            },
            take,
            skip,
        })
    }

    /**
     * Обновить заказ
     * @param orderId 
     * @param param1 
     * @returns 
     */
    async update(orderId: string, { ingredients, recipes, ...input }: UpdateOrderInput) {
        let cost = 0;

        // Получаем существующий заказ для проверки
        const existingOrder = await this.prismaService.order.findUnique({
            where: { id: orderId },
            include: {
                orderRecipes: true,
                orderIngredients: true
            }
        });

        if (!existingOrder) {
            throw new Error(`Order with id ${orderId} not found`);
        }

        // Получаем рецепты из базы
        const recipeToOrders = recipes ? await this.prismaService.recipe.findMany({
            where: {
                id: {
                    in: recipes.map(r => r.recipeId),
                }
            },
        }) : [];

        // Рассчитываем стоимость рецептов
        for (let recipe of recipeToOrders) {
            const recipeDetails = recipes?.find(i => i.recipeId === recipe.id);
            if (!recipeDetails) continue;
            cost += recipeDetails.units * recipe.price;
        }

        // Получаем ингредиенты из базы
        const ingredientsToOrders = ingredients ? await this.prismaService.ingredient.findMany({
            where: {
                id: {
                    in: ingredients.map(i => i.ingredientId),
                }
            },
        }) : [];

        // Рассчитываем стоимость ингредиентов
        for (let ingredient of ingredientsToOrders) {
            const ingredientDetails = ingredients?.find(i => i.ingredientId === ingredient.id);
            if (!ingredientDetails) continue;
            cost += ingredientDetails.units * ingredient.price;
        }

        // Обновляем заказ
        return this.prismaService.order.update({
            where: { id: orderId },
            data: {
                ...(input as any), // Все поля в input необязательные
                cost: cost || existingOrder.cost, // Сохраняем старую стоимость, если новая не рассчитана
                // Удаляем старые связи и создаем новые
                orderRecipes: {
                    deleteMany: {},
                    createMany: {
                        data: (recipes || []).map((rec) => {
                            const recipe = recipeToOrders.find(r => r.id === rec.recipeId);
                            return {
                                ...rec,
                                costPerUnit: recipe?.price ?? 0,
                            } as OrderRecipeCreateManyOrderInput;
                        })
                    }
                },
                orderIngredients: {
                    deleteMany: {},
                    createMany: {
                        data: (ingredients || []).map((ing) => {
                            const ingredient = ingredientsToOrders.find(i => i.id === ing.ingredientId);
                            return {
                                ...ing,
                                costPerUnit: ingredient?.price ?? 0,
                            } as OrderIngredientCreateManyOrderInput;
                        })
                    }
                }
            },
            include: {
                orderRecipes: true,
                orderIngredients: true
            }
        });
    }

    /**
     * Закрытие заказа
     * @param id 
     * @returns 
     */
    async close(id: string) {
        return this.prismaService.order.update({
            where: { id },
            data: {
                closedAt: new Date(),
            },
        })
    }

    /**
     * Отмена/удаление заказа
     * @param id 
     * @returns 
     */
    async remove(id: string) {
        return this.prismaService.order.update({
            where: { id },
            data: {
                cancelAt: new Date(),
            },
        })
    }
}