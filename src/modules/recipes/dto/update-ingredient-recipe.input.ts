import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class UpdateIngredientRecipeInput {
	@IsString()
	@IsNotEmpty()
	@Field(() => String)
	id: string;

	@IsNumber()
	@Field(() => Number)
	units: number;
}