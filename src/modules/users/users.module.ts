import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from '../prisma/prisma.module'
import { UsersService } from './services'
import { UsersResolver } from './users.resolver'

@Module({
	imports: [JwtModule, PrismaModule],
	providers: [UsersService, UsersResolver],
	exports: [UsersService],
})
export class UsersModule {}