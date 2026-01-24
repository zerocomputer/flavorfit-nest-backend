import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { TasksService, TaskTagTypeService } from './services'

@Module({
	imports: [PrismaModule],
	providers: [TasksService, TaskTagTypeService],
	exports: [],
})
export class TasksModule {}