import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { ProfilesResolver } from './profiles.resolver'
import { ProfilesService, UsersService } from './services'
import { UsersResolver } from './users.resolver'

@Module({
	imports: [PrismaModule],
	providers: [UsersService, ProfilesService, UsersResolver, ProfilesResolver],
	exports: [UsersService],
})
export class UsersModule { }