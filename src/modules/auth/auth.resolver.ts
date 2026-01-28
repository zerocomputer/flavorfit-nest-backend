import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import type { Response } from 'express'
import { AuthRefreshGuard } from 'src/common/guards'
import { SignInInput, SignUpInput } from './dto'
import { AuthModel } from './models'
import { AuthService } from './services'

@Resolver('Auth')
export class AuthResolver {
	constructor(
		private readonly authService: AuthService,
	) {}

	@Mutation(() => AuthModel)
	async signUp(
		@Args('input') input: SignUpInput,
		@Context("res") res: Response
	): Promise<AuthModel> {
		const tokens = await this.authService.signUp(input);
		this.authService.setRefreshCookie(res, tokens.refreshToken);
		
		return { 
			accessToken: tokens.accessToken 
		};
	}
	
	@Mutation(() => AuthModel)
	async signIn(
		@Args('input') input: SignInInput,
		@Context("res") res: Response
	): Promise<AuthModel> {
		const tokens = await this.authService.signIn(input);
		this.authService.setRefreshCookie(res, tokens.refreshToken);
		
		return { 
			accessToken: tokens.accessToken 
		};
	}

	@Mutation(() => AuthModel)
	@UseGuards(AuthRefreshGuard)
	async refreshToken(
		@Context("res") res: Response,
		@Context("req") req: Request & { user: { sub: string } }
	): Promise<AuthModel> {
		const tokens = await this.authService.refreshTokens(req.user.sub);
		this.authService.setRefreshCookie(res, tokens.refreshToken);
		
		return { 
			accessToken: tokens.accessToken 
		};
	}
}