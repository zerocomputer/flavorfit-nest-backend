
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { JwtPayload } from '../interfaces'

export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx)
    const request = context.getContext().req
    const user = request.user;

    return (data ? user?.[data] : user) as JwtPayload;
  },
);
