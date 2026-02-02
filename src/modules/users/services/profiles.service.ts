import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/modules/prisma/services'
import { CreateProfileInput } from '../dto'

@Injectable()
export class ProfilesService {
	constructor(
		private readonly prismaService: PrismaService,
	) {}

	/**
	 * Создать профиль (уникальные записи измерений)
	 * @param userId
	 * @param input 
	 * @returns 
	 */
	async create(userId: string, input: CreateProfileInput) {
		return this.prismaService.profile.create(
			{ 
				data: { 
					...input,
					user: {
						connect: {
							id: userId,
						}
					}
				} 
			}
		);
	}
}