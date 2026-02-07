import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class RecipeCategoryModel {
	@Field(() => String)
	id: string;

	@Field(() => String)
	name: string;

	@Field(() => String, { nullable: true })
	icon?: string;

	@Field(() => RecipeCategoryModel)
	parent: RecipeCategoryModel;
}