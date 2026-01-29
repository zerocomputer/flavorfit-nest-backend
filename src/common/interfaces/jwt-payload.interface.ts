import { UserRole } from 'prisma/generated/prisma/enums'

export interface JwtPayload {
	sub: string;
	r: UserRole;
}
