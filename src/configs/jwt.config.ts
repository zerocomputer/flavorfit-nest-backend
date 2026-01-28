import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const jwtConfig = (configService: ConfigService): JwtModuleOptions => ({
	secret: configService.getOrThrow<string>('ACCESS_JWT_SECRET'),
	signOptions: { expiresIn: '1h' },
})