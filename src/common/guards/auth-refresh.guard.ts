import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { GqlExecutionContext } from '@nestjs/graphql'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthRefreshGuard implements CanActivate {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
	) {}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext().req
		const refreshToken = request.cookies?.refreshToken;
		
		if (!refreshToken) {
			throw new UnauthorizedException('No refresh token provided');
		}
		
		if (this.jwtService.verify(refreshToken, {
			secret: this.configService.get<string>('REFRESH_JWT_SECRET'),
		})) {
			request.user = this.jwtService.decode(refreshToken);
			return true;
		}

		throw new UnauthorizedException('Token is invalid');
	}
}