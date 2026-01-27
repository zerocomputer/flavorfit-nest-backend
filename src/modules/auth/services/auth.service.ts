import { Injectable } from '@nestjs/common'
import { verify } from 'argon2'
import { AuthInput, CreateUserInput } from '../dto'
import { TokensService } from './tokens.service'
import { UsersService } from './users.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly tokensService: TokensService,
	) {}

	/**
	 * Регистрация пользователя
	 * @param input 
	 * @returns 
	 */
	async signUp(input: CreateUserInput) {
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
	async signIn(input: AuthInput) {
		const user = await this.usersService.find({ email: input.email });
		if (!user) {
			throw new Error('User not found');
		}
		if (await verify(user.passwordHash, input.password) === false) {
			throw new Error('Invalid password');
		}
		return this.tokensService.generateTokens(user.id);
	}
}