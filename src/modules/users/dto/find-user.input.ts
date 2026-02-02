import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class FindUserInput {
	@Field({ nullable: true })
	id?: string;

	@Field({ nullable: true })
	email?: string;

	@Field({ nullable: true })
	role?: string;
}