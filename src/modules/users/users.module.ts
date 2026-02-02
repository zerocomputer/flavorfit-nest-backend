import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from '../prisma/prisma.module'
import { ProfilesResolver } from './profiles.resolver'
import { ProfilesService, UsersService } from './services'
import { UsersResolver } from './users.resolver'

@Module({
	imports: [JwtModule, PrismaModule],
	providers: [UsersService, ProfilesService, UsersResolver, ProfilesResolver],
	exports: [UsersService],
})
export class UsersModule {}