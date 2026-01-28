import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { GqlExecutionContext } from '@nestjs/graphql'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthAccessGuard implements CanActivate {
	constructor(
		@Inject(JwtService)
		private readonly jwtService: JwtService,
		@Inject(ConfigService)
		private readonly configService: ConfigService,
	) {}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext().req
		const accessToken = request.headers?.authorization?.split(' ')[1];
		
		if (!accessToken) {
			throw new UnauthorizedException('No access token provided');
		}
		
		if (this.jwtService.verify(accessToken, {
			secret: this.configService.get<string>('ACCESS_JWT_SECRET'),
		})) {
			request.user = this.jwtService.decode(accessToken);
			return true;
		}

		throw new UnauthorizedException('Token is invalid');
	}
}