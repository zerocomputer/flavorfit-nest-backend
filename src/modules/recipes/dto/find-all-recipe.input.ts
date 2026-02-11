import { Field, InputType } from '@nestjs/graphql'
import { IsBoolean, IsOptional, IsString } from 'class-validator'
import { PaginationInput } from 'src/common/dto'

@InputType()
export class FindAllRecipeInput extends PaginationInput {
	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	userId?: string;

	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	categoryId?: string;

	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	name?: string;

	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	description?: string;

	@IsOptional()
	@IsBoolean()
	@Field(() => Boolean, { nullable: true })
	canBeOrder?: boolean;

	@IsOptional()
	@IsBoolean()
	@Field(() => Boolean, { defaultValue: false })
	deleted?: boolean;
}