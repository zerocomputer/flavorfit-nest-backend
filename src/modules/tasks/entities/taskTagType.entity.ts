import { Field, ID, ObjectType } from '@nestjs/graphql'
import { TaskTagTypeEnum } from 'prisma/generated/prisma/enums'

@ObjectType()
export class TaskTagType {
	@Field(() => ID)
	id: number;

	@Field(() => TaskTagTypeEnum)
	type: TaskTagTypeEnum;

	@Field({ nullable: true })
	color: string | null;

	@Field()
	createdAt: Date;
} 