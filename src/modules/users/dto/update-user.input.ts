import { Field, InputType } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'

@InputType()
export class UpdateUserInput {
	@IsOptional()
	@Field(() => String, {nullable: true})
	firstName?: string;

	@IsOptional()
	@Field(() => String, {nullable: true})
	lastName?: string;

	@IsOptional()
	@Field(() => String, {nullable: true})
	biography?: string;
}