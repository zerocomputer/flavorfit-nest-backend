import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { UserRole } from 'prisma/generated/prisma/enums'
import { PrismaService } from 'src/modules/prisma/services'
import { CreateUserInput } from '../dto'
import { FindUserInput } from '../dto/find-user.input'

@Injectable()
export class UsersService {
	constructor(
		private readonly prismaService: PrismaService,
	) {}

	/**
	 * Поиск пользователя
	 * @param input 
	 * @returns 
	 */
	async find(input: FindUserInput) {
		return this.prismaService.user.findFirst({
			where: {
				id: input.id,
				email: input.email
			}
		})
	}

	/**
	 * Создание пользователя
	 * @param input 
	 * @returns 
	 */
	async create(input: CreateUserInput, role?: UserRole) {
		const passwordHash = await hash(input.password);
		
		return this.prismaService.user.create({
			data: {
				role,
				firstName: input.firstName,
				lastName: input.lastName,
				email: input.email,
				passwordHash,
			}
		})
	}
}