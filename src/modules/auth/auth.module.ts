import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from '../prisma/prisma.module'
import { AuthResolver } from './auth.resolver'
import { AuthService, TokensService, UsersService } from './services'

@Module({
	imports: [
		JwtModule,
		PrismaModule,
	],
	providers: [
		AuthService, 
		AuthResolver, 
		UsersService, 	
		TokensService,
	],
	exports: [],
})
export class AuthModule {}