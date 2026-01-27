import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService as JwtServiceLib } from '@nestjs/jwt'
import { JwtPayload } from 'src/common/interfaces'

@Injectable()
export class TokensService {
	constructor(
		private readonly jwtService: JwtServiceLib,
		private readonly configService: ConfigService,
	) {}

	/**
	 * Генерировать пару токенов
	 * @param accountId
	 * @param profileId
	 * @returns
	 */
	async generateTokens(sub: string) {
		const payload: JwtPayload = {
			sub,
		};

		const accessToken = await this.jwtService.signAsync(payload, { 
			expiresIn: '1h',
			secret: this.configService.get<string>('JWT_SECRET'),
		});
		const refreshToken = await this.jwtService.signAsync(payload, { 
			expiresIn: '7d',
			secret: this.configService.get<string>('JWT_SECRET'),
		});

		return { accessToken, refreshToken };
	}
}