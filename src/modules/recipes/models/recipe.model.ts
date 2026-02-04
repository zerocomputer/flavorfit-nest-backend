import { Field, Float, ObjectType } from '@nestjs/graphql'
import { Difficulty } from 'prisma/generated/prisma/enums'
import { UserModel } from 'src/modules/users/models'
import { RecipeCategoryModel } from './recipe-category.model'
import { RecipeImageModel } from './recipe-image.model'

@ObjectType()
export class RecipeModel {
	@Field(() => String)
	id: string;

	@Field(() => UserModel)
	user: UserModel

	@Field(() => RecipeCategoryModel)
	category: RecipeCategoryModel

	@Field(() => String)
	name: string
	@Field(() => String)
	description: string

	@Field(() => Number)
	carbohydrates: number
	@Field(() => Number)
  protein: number
	@Field(() => Number)
  fat: number
	@Field(() => Number)
  fiber: number
	@Field(() => Number)
  kcal: number
	@Field(() => Float)
  weight: number

	@Field(() => Boolean)
	canBeOrder: boolean
	@Field(() => Number)
  price: number
	@Field(() => Number)
  minUnitsForOrder: number
	@Field(() => Number)
  maxUnitsForOrder: number
	@Field(() => Number)
  cookingTime: number

	@Field(() => Difficulty)
	difficulty: Difficulty

	@Field(() => [RecipeImageModel])
	images: RecipeImageModel[]
}