import { Field, ObjectType } from '@nestjs/graphql'
import { Gender, UserRole } from 'prisma/generated/prisma/enums'
import { ProfileModel } from './profile.model'

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
	gender: Gender;

	@Field()
	email: string;
	@Field()
	phoneNumber: string;

	@Field()
	biography: string;
	@Field()
	photoUrl: string;

	@Field(() => [ProfileModel])
	profiles: ProfileModel[]

	@Field()
	createdAt: Date;
	@Field()
	updatedAt: Date;
}