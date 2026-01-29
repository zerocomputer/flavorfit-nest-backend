import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const roles = this.reflector.get<string[]>('roles', context.getHandler());

		const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext().req

		if (!request.user) {
			return false;
		}
		
		return roles.includes(request.user.r);
	}
}