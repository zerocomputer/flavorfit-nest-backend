import { Injectable } from '@nestjs/common'
import { RecipeWhereInput } from 'prisma/generated/prisma/models'
import { PrismaService } from 'src/modules/prisma/services'
import { AddImageRecipeInput, AddIngredientRecipeInput, CreateRecipeInput, FindAllRecipeInput, FindOneRecipeInput, UpdateImageRecipeInput, UpdateIngredientRecipeInput, UpdateRecipeInput } from '../dto'

@Injectable()
export class RecipesService {
	constructor(
		private readonly prismaService: PrismaService,
	) {}

	/**
	 * Создать рецепт
	 * @param userId 
	 * @param input 
	 * @returns 
	 */
	async create(userId: string, input: CreateRecipeInput) {
		return this.prismaService.recipe.create({
			data: {
				userId,
				...input,
			},
		})
	}

	/**
	 * Обновить рецепт
	 * @param recipeId 
	 * @param input 
	 * @returns 
	 */
	async update(recipeId: string, input: UpdateRecipeInput) {
		return this.prismaService.recipe.update({
			where: {
				id: recipeId
			},
			data: input,
		})
	}

	/**
	 * Добавить ингридиент к рецепту
	 * @param input 
	 * @returns 
	 */
	async addIngredient(input: AddIngredientRecipeInput) {
		return this.prismaService.recipeIngredient.create({
			data: input,
		})
	}

	/**
	 * Обновить ингридиент рецепта
	 * @param param0 
	 * @returns 
	 */
	async updateIngredient({id, units}: UpdateIngredientRecipeInput) {
		return this.prismaService.recipeIngredient.update({
			where: {
				id,
			},
			data: {
				units,
			}
		})
	}

	/**
	 * Удалить ингридиент из рецепта
	 * @param ingredientRecipeId 
	 * @returns 
	 */
	async removeIngredient(ingredientRecipeId: string) {
		return this.prismaService.recipeIngredient.delete({
			where: {
				id: ingredientRecipeId,
			}
		})
	}

	/**
	 * Добавить изображение рецепта
	 * @param input 
	 * @returns 
	 */
	async addImage(input: AddImageRecipeInput) {
		return this.prismaService.recipeImage.create({
			data: input,
		})
	}

	/**
	 * Обновить изображение рецепта
	 * @param param0 
	 * @returns 
	 */
	async updateImage({id, ...data}: UpdateImageRecipeInput) {
		return this.prismaService.recipeImage.update({
			where: { id },
			data,
		})
	}

	/**
	 * Обновить изображение рецепта
	 * @param imageRecipeId 
	 * @returns 
	 */
	async removeImage(imageRecipeId: string) {
		return this.prismaService.recipeImage.update({
			where: { id: imageRecipeId },
			data: {
				deletedAt: new Date()
			}
		})
	}

	/**
	 * Построить RecipeWhereInput для запросов на получение рецептов (одного или многих с пагинацией)
	 * @param input 
	 * @returns 
	 */
	_buildFindWhere(input: FindAllRecipeInput | FindOneRecipeInput) {
		const where: RecipeWhereInput = {
			OR: [],
			deletedAt: input['deleted'] === true 
				? { not: null } 
				: null
		};

		for (let key of Object.keys(input)) {
			if (['take', 'skip'].includes(key)) continue;
			if (where.OR) where.OR.push({ [key]: input[key] });
		}

		return where;
	}

	/**
	 * Получение всех рецептов с пагинацией
	 * @param input 
	 * @returns 
	 */
	async findAll(input: FindAllRecipeInput) {
		return this.prismaService.recipe.findMany({
			where: this._buildFindWhere(input),
			include: {
				images: true,
			},
			skip: input.skip,
			take: input.take,
		})
	}

	/**
	 * Получение одного рецепта по одному из перечисленных параметров
	 * @param input 
	 * @returns 
	 */
	async findOne(input: FindOneRecipeInput) {
		return this.prismaService.recipe.findFirst({
			where: this._buildFindWhere(input),
			include: {
				images: true,
			}
		})
	}

	/**
	 * Удалить рецепт
	 * @param recipeId 
	 * @returns 
	 */
	async remove(recipeId: string) {
		return this.prismaService.recipe.update({
			where: { id: recipeId },
			data: {
				deletedAt: new Date()
			}
		})
	}
}