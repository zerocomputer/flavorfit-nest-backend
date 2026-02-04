import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class AddImageRecipeInput {
	@IsString()
	@IsNotEmpty()
	@Field(() => String)
	recipeId: string;

	@IsNumber()
	@Field(() => Number)
	index: number;

	@IsString()
	@IsNotEmpty()
	@Field(() => String)
	imageUrl: string;
}