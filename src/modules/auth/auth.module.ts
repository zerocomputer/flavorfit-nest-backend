import { Module } from '@nestjs/common'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './services'

@Module({
	imports: [],
	providers: [AuthService, AuthResolver],
	exports: [],
})
export class AuthModule {}