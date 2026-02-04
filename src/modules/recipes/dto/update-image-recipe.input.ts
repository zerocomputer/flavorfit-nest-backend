import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

@InputType()
export class UpdateImageRecipeInput {
	@IsString()
	@IsNotEmpty()
	@Field(() => String)
	id: string;

	@IsOptional()
	@IsNumber()
	@Field(() => Number)
	index?: number;

	@IsOptional()
	@IsString()
	@Field(() => String)
	imageUrl?: string;
}