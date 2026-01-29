
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { UserRole } from 'prisma/generated/prisma/enums'
import { AuthAccessGuard, RolesGuard } from '../guards'

export function Roles(...roles: UserRole[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthAccessGuard, RolesGuard),
  );
}
