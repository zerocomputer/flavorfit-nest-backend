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
            }
        })
    }

    async findOne(input: FindOneOrderInput) { }

    async findAll(input: FindAllOrderInput) { }

    async update(input: UpdateOrderInput) { }

    async remove(id: string) { }
}