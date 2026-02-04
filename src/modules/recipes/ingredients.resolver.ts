import { BadRequestException, NotFoundException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Roles } from 'src/common/decorators'
import { CreateIngredientInput, FindAllIngredientInput, FindIngredientInput, UpdateIngredientInput } from './dto'
import { IngredientModel } from './models'
import { IngredientsService } from './services'

@Resolver()
export class IngredientsResolver {
	constructor(
		private readonly ingredientsService: IngredientsService,
	) {}

	@Mutation(() => IngredientModel)
	@Roles('ADMIN')
	async createIngredient(
		@Args('input') input: CreateIngredientInput, 
	) {
		return this.ingredientsService.create(input);
	}

	@Mutation(() => IngredientModel)
	@Roles('ADMIN')
	async updateIngredient(
		@Args('ingredientId', { type: () => String }) ingredientId: string,
		@Args('input') input: UpdateIngredientInput,
	) {
		if (Object.keys(input).length === 0) throw new BadRequestException('Noting to update');
		return this.ingredientsService.update(ingredientId, input);
	}

	@Mutation(() => Boolean)
	@Roles('ADMIN')
	async deleteIngredient(
		@Args('ingredientId', { type: () => String }) ingredientId: string,
	) {
		if (!(await this.ingredientsService.findOne({id: ingredientId}))) throw new NotFoundException('Ingredient not found');
		return this.ingredientsService.remove(ingredientId);
	}

	@Query(() => [IngredientModel])
	async findAllIngredients(
		@Args('input') input: FindAllIngredientInput,
	) {
		return this.ingredientsService.findAll(input);
	}

	@Query(() => IngredientModel)
	async findOneIngredient(
		@Args('input') input: FindIngredientInput,
	) {
		if (Object.keys(input).length === 0) throw new BadRequestException('Noting fields sent');
		return this.ingredientsService.findOne(input);
	}
}