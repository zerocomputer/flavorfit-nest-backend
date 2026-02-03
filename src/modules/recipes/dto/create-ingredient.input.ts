import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator'
import { Unit } from 'prisma/generated/prisma/enums'

registerEnumType(Unit, {
  name: 'Unit', // GraphQL enum name
})

@InputType()
export class CreateIngredientInput {
	@IsNotEmpty()
	@Field(() => String)
	icon: string

	@IsNotEmpty()
	@Field(() => String)
	name: string

	@IsNotEmpty()
	@Field(() => String)
	description: string

	@IsEnum(Unit)
	@Field(() => String)
	unit: Unit

	@IsNumber()
	@Field(() => Number)
	price: number

	@IsNumber()
	@Field(() => Number)
	minUnitsForOrder: number

	@IsNumber()
	@Field(() => Number)
	maxUnitsForOrder: number
}