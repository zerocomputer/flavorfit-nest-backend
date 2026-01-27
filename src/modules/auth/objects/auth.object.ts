import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class JwtPayload {
	@Field()
	accessToken: string;
	@Field()
	refreshToken: string;
}