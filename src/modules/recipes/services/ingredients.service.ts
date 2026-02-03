import { ConflictException, Injectable } from '@nestjs/common'
import { IngredientWhereInput } from 'prisma/generated/prisma/models'
import { PrismaService } from 'src/modules/prisma/services'
import { CreateIngredientInput, FindAllIngredientInput, FindIngredientInput, UpdateIngredientInput } from '../dto'

@Injectable()
export class IngredientsService {
	constructor(
		private readonly prismaService: PrismaService,
	){}

	/**
	 * Получение одного ингредиента
	 * @param input 
	 * @returns 
	 */
	async findOne({deleted, ...input}: FindIngredientInput) {
		const where: IngredientWhereInput = { 
			OR: [],
			deletedAt: deleted ? { not: null } : null
		};

		for (let key of Object.keys(input)) {
			if (where.OR) where.OR.push({ [key]: input[key] });
		}

		return this.prismaService.ingredient.findFirst({
			where,
		})
	}

	/**
	 * Создание ингредиента
	 * @param input 
	 * @returns 
	 */
	async create(input: CreateIngredientInput) {
		const tryToGetIngredient = await this.findOne({ name: input.name });

		if (tryToGetIngredient) {
			throw new ConflictException('Ingredient with this name already exists');
		}

		return this.prismaService.ingredient.create({ data: input });
	}

	/**
	 * Обновление ингредиента
	 * @param ingredientId 
	 * @param input 
	 * @returns 
	 */
	async update(ingredientId: string, input: UpdateIngredientInput) {
		return this.prismaService.ingredient.update({
			where: { id: ingredientId },
			data: input,
		})
	}

	async remove(ingredientId: string) {
		return !!(await this.prismaService.ingredient.update({
			where: { id: ingredientId },
			data: { deletedAt: new Date() },
		}))
	}

	/**
	 * Получение всех ингредиентов
	 * @param param0 
	 * @returns 
	 */
	async findAll({take, skip, deleted, ...where}: FindAllIngredientInput) {
		return this.prismaService.ingredient.findMany({ 
			skip: skip || 0, 
			take: take || 20,
			where: {
				...where,
				deletedAt: deleted 
					? { not: null } 
					: { equals: null }
			}, 
		})
	}
}