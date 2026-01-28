import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { verify } from 'argon2'
import { Response } from 'express'
import { UsersService } from 'src/modules/users/services'
import { SignInInput, SignUpInput } from '../dto'
import { TokensService } from './tokens.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly configService: ConfigService,
		private readonly tokensService: TokensService,
	) {}

	/**
	 * Регистрация пользователя
	 * @param input 
	 * @returns 
	 */
	async signUp(input: SignUpInput) {
		if (await this.usersService.find({ email: input.email })) {
			throw new Error('User already exists');
		}
		const user = await this.usersService.create(input);
		return this.tokensService.generateTokens(user.id);
	}

	/**
	 * Авторизация пользователя
	 * @param input 
	 * @returns 
	 */
	async signIn(input: SignInInput) {
		const user = await this.usersService.find({ email: input.email });
		if (!user) {
			throw new Error('User not found');
		}
		if (await verify(user.passwordHash, input.password) === false) {
			throw new Error('Invalid password');
		}
		return this.tokensService.generateTokens(user.id);
	}

	/**
	 * Обновление токенов
	 * @param userId 
	 * @returns 
	 */
	async refreshTokens(userId: string) {
		return this.tokensService.generateTokens(userId);
	}

	/**
	 * Установить cookie с refresh токеном
	 * @param res 
	 * @param refreshToken 
	 */
	setRefreshCookie(res: Response, refreshToken: string|null) {
		res.cookie("refreshToken", refreshToken, { 
			httpOnly: true, 
			secure: this.configService.get<string>('NODE_ENV') === 'production', 
			sameSite: 'strict',
			domain: this.configService.get<string>('DOMAIN') || 'localhost',
			expires: refreshToken === null ? 
				new Date(0) : 
				new Date(Date.now() + this.tokensService.REFRESH_TOKEN_EXPIRATION_DAYS * 24 * 60 * 60 * 1000),
		});
	}
}