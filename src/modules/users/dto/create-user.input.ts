import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsEnum, IsNotEmpty, IsStrongPassword } from 'class-validator'
import { Gender } from 'prisma/generated/prisma/enums'

@InputType()
export class CreateUserInput {
	@IsNotEmpty()
	@Field()
	firstName: string;

	@IsNotEmpty()
	@Field()
	lastName: string;

	@IsNotEmpty()
	@IsEnum(Gender)
	@Field(() => String)
	gender: Gender;

	@IsEmail()
	@Field()
	email: string;

	@IsStrongPassword({
		minLength: 8,
		minLowercase: 1,
		minUppercase: 1,
		minNumbers: 1,
		minSymbols: 1,
	})
	@Field()
	password: string;
}