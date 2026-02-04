import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class AddIngredientRecipeInput {
	@IsString()
	@IsNotEmpty()
	@Field(() => String)
	recipeId: string;
	
	@IsString()
	@IsNotEmpty()
	@Field(() => String)
	ingredientId: string;

	@IsNumber()
	@Field(() => Number)
	units: number;
}