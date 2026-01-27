import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthInput, CreateUserInput } from './dto'
import { JwtPayload } from './objects'
import { AuthService } from './services'

@Resolver()
export class AuthResolver {
	constructor(
		private readonly authService: AuthService,
	) {}

	@Mutation(() => JwtPayload)
	async signUp(@Args('input') input: CreateUserInput): Promise<JwtPayload> {
		return await this.authService.signUp(input)
	}
	
	@Mutation(() => JwtPayload)
	async signIn(@Args('input') input: AuthInput): Promise<JwtPayload> {
		return await this.authService.signIn(input)
	}
}