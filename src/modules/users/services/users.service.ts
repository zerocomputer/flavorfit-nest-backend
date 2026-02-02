import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { UserRole } from 'prisma/generated/prisma/enums'
import { UserInclude, UserUpdateInput, UserWhereInput } from 'prisma/generated/prisma/models'
import { PrismaService } from 'src/modules/prisma/services'
import { CreateUserInput, FindUserInput } from '../dto'

@Injectable()
export class UsersService {
	constructor(
		private readonly prismaService: PrismaService,
	) {}

	buildFindOrWhere(input: FindUserInput) {
		const where: UserWhereInput = { OR: [] };
	
		for (let key of Object.keys(input)) {
			if (where.OR) where.OR[key] = { 
				[key]: input[key] 
			};
		}

		return where;
	}

	/**
	 * Поиск пользователя
	 * @param where 
	 * @returns 
	 */
	async findOne(where: UserWhereInput, include?: UserInclude) {
		return this.prismaService.user.findFirst({
			where,
			include,
		});
	}

	/**
	 * Получение всех пользователей с пагинацией
	 * @param input 
	 * @returns 
	 */
	async findAll(input: FindUserInput) {
		return this.prismaService.user.findMany({
			where: this.buildFindOrWhere(input)
		});
	}

	/**
	 * Создание пользователя
	 * @param input 
	 * @returns 
	 */
	async create({password, ...input}: CreateUserInput, role: UserRole = UserRole.USER) {
		const passwordHash = await hash(password);
		
		return this.prismaService.user.create({
			data: {
				role,
				...input,
				passwordHash,
			}
		})
	}

	/**
	 * Обновление пользователя
	 * @param input 
	 * @returns 
	 */
	async update(userId: string, input: UserUpdateInput) {
		return this.prismaService.user.update({
			where: {
				id: userId,
			},
			data: input,
		})
	}
}