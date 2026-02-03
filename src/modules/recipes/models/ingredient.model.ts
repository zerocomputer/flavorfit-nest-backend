import { Field, ObjectType } from '@nestjs/graphql'
import { Unit } from 'prisma/generated/prisma/enums'

@ObjectType()
export class IngredientModel {
	@Field(() => String)
	id: string

	@Field(() => String)
	icon: string
	@Field(() => String)
	name: string
	@Field(() => String)
	description: string
	@Field(() => Unit)
	unit: Unit

	@Field(() => Number)
	price: number
	@Field(() => Number)
	minUnitsForOrder: number
	@Field(() => Number)
	maxUnitsForOrder: number

	@Field(() => Date)
	createdAt: Date
	@Field(() => Date)
	updatedAt: Date
	@Field(() => Date)
	endingAt: Date
	@Field(() => Date)
	deletedAt: Date
}