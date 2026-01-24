import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CreateTaskTagTypeInput } from './dto'
import { TaskTagType } from './entities'
import { TaskTagTypeService } from './services'

@Resolver(() => TaskTagType)
export class TaskTagTypeResolver {
	constructor(
		private readonly taskTagTypeService: TaskTagTypeService,
	) {}

	@Mutation(() => TaskTagType)
	async createTaskTagType(@Args('input') input: CreateTaskTagTypeInput): Promise<TaskTagType> {
		return this.taskTagTypeService.create(input);
	}
}
