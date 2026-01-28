import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from '../prisma/prisma.module'
import { UsersModule } from '../users/users.module'
import { AuthResolver } from './auth.resolver'
import { AuthService, TokensService } from './services'

@Module({
	imports: [
		JwtModule,
		PrismaModule,
		UsersModule,
	],
	providers: [
		AuthService, 
		AuthResolver, 
		TokensService,
	],
	exports: [],
})
export class AuthModule {}