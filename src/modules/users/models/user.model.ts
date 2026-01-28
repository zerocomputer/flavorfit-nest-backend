import { Field, ObjectType } from '@nestjs/graphql'
import { UserRole } from 'prisma/generated/prisma/enums'

@ObjectType()
export class UserModel {
	@Field()
	id: string;

	@Field()
	role: UserRole;

	@Field()
	firstName: string;
	@Field()
	lastName: string;
	@Field()
	email: string;
 	@Field(() => String, { nullable: true })
	phoneNumber: string | null;

  @Field(() => Date, { nullable: true })
	birthDate: Date | null;
  @Field(() => String, { nullable: true })
	profilePhotoUrl: string | null;

	@Field()
	createdAt: Date;
	@Field()
	updatedAt: Date;
}