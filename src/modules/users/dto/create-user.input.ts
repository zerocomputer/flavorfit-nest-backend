import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator'

@InputType()
export class CreateUserInput {
	@IsNotEmpty()
	@Field()
	firstName: string;

	@IsNotEmpty()
	@Field()
	lastName: string;

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