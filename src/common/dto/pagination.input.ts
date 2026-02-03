import { Field, InputType } from '@nestjs/graphql'
import { IsNumber } from 'class-validator'

@InputType()
export class PaginationInput {
	@IsNumber()
	@Field(() => Number, {defaultValue: 20})
	take?: number;

	@IsNumber()
	@Field(() => Number, {defaultValue: 0})
	skip?: number;
}	