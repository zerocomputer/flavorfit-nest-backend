import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'

@InputType()
export class FindOneRecipeInput {
	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	id?: string;

	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	name?: string;

	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	description?: string;
}