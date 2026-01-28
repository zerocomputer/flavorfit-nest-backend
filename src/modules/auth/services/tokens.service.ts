import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService as JwtServiceLib } from '@nestjs/jwt'
import { JwtPayload } from 'src/common/interfaces'

@Injectable()
export class TokensService {
	public readonly ACCESS_TOKEN_EXPIRATION_HOURS = 1;
	public readonly REFRESH_TOKEN_EXPIRATION_DAYS = 7;

	constructor(
		private readonly jwtService: JwtServiceLib,
		private readonly configService: ConfigService,
	) {}

	/**
	 * Генерировать пару токенов
	 * @param sub
	 * @returns { accessToken: string; refreshToken: string }
	 */
	async generateTokens(sub: string) {
		const payload: JwtPayload = {
			sub,
		};

		const accessToken = await this.jwtService.signAsync(payload, { 
			expiresIn: `${this.ACCESS_TOKEN_EXPIRATION_HOURS}h`,
			secret: this.configService.get<string>('ACCESS_JWT_SECRET'),
		});
		const refreshToken = await this.jwtService.signAsync(payload, { 
			expiresIn: `${this.REFRESH_TOKEN_EXPIRATION_DAYS}d`,
			secret: this.configService.get<string>('REFRESH_JWT_SECRET'),
		});

		return { accessToken, refreshToken };
	}
}