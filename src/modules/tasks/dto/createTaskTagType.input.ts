import { Field, InputType } from '@nestjs/graphql'
import { TaskTagTypeEnum } from 'prisma/generated/prisma/enums'

@InputType()
export class CreateTaskTagTypeInput {
	@Field()
	type: TaskTagTypeEnum;
	
	@Field({ nullable: true })
	color?: string;
}