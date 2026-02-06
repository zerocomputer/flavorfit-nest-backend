import { Field, Float, InputType, registerEnumType } from '@nestjs/graphql'
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator'
import { Difficulty } from 'prisma/generated/prisma/enums'

registerEnumType(Difficulty, {
	name: 'Difficulty'
});

@InputType()
export class CreateRecipeInput {
	@IsNotEmpty()
	@IsString()
	@MinLength(10)
	@MaxLength(300)
	@Field(() => String)
	name: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(250)
	@MaxLength(2800)
	@Field(() => String)
	description: string;

	@IsNotEmpty()
	@IsString()
	@Field(() => String)
	categoryId: string;

	@IsNumber()
	@Field(() => Number)
	carbohydrates: number
	@IsNumber()
	@Field(() => Number)
	protein: number
	@IsNumber()
	@Field(() => Number)
	fat: number
	@IsNumber()
	@Field(() => Number)
	fiber: number
	@IsNumber()
	@Field(() => Number)
	kcal: number
	@IsNumber()
	@Field(() => Float)
	weight: number

	@IsBoolean()
	@Field(() => Boolean)
	canBeOrder: boolean
	@IsNumber()
	@Field(() => Number)
	price: number
	@IsNumber()
	@Field(() => Number)
	minUnitsForOrder: number
	@IsNumber()
	@Field(() => Number)
	maxUnitsForOrder: number
	@IsNumber()
	@Field(() => Number)
	cookingTime: number

	@IsEnum(Difficulty)
	@Field(() => Difficulty)
	difficulty: Difficulty
}