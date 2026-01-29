import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { UserRole } from 'prisma/generated/prisma/enums'
import { PrismaService } from 'src/modules/prisma/services'
import { CreateUserInput, FindUserInput } from '../dto'
import { FindWithUserPaginationInput } from '../dto/find-with-user-pagination.input'

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
	async findOne(input: FindUserInput) {
		return this.prismaService.user.findFirst({
			where: {
				OR: [
					{
						id: input.id,
					},
					{
						email: input.email
					}
				],
			},
		})
	}

	/**
	 * Получение всех пользователей с пагинацией
	 * @param input 
	 * @returns 
	 */
	async findAll({ limit, offset }: FindWithUserPaginationInput) {
		return this.prismaService.user.findMany({
			take: limit,
			skip: offset
		});
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