import { Field, InputType } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'

@InputType()
export class FindIngredientInput {
	@IsOptional()
	@Field(() => String, {nullable: true})
	id?: string

	@IsOptional()
	@Field(() => String, {nullable: true})
	name?: string

	@Field(() => Boolean, {defaultValue: false})
	deleted?: boolean;
}