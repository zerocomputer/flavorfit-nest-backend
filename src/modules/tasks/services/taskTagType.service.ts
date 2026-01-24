import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/modules/prisma/services/prisma.service'
import { CreateTaskTagTypeInput } from '../dto'

@Injectable()
export class TaskTagTypeService {
	constructor(
		private readonly prismaService: PrismaService,
	) {}
	
	async create(input: CreateTaskTagTypeInput) {
		try {
			return await this.prismaService.taskTagType.create({
				data: input,
			})
		} catch (error) {
			throw error
		}
	}
}