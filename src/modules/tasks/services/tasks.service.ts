import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/modules/prisma/services'

@Injectable()
export class TasksService {
	constructor(
		private readonly prismaService: PrismaService,
	) {}
}