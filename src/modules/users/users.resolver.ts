import { BadRequestException, NotFoundException, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Roles } from 'src/common/decorators'
import { CurrentUser } from 'src/common/decorators/current-user.decorator'
import { AuthAccessGuard } from 'src/common/guards'
import type { JwtPayload } from 'src/common/interfaces'
import { FindUserInput, UpdateUserInput } from './dto'
import { UserModel } from './models'
import { ProfilesService, UsersService } from './services'

@Resolver()
export class UsersResolver {
	constructor(
		private readonly usersService: UsersService,
		private readonly profilesService: ProfilesService,
	) {}

	@Query(() => UserModel)
	@UseGuards(AuthAccessGuard)
	async me(
		@CurrentUser() user
	) {
		const tryUser = await this.usersService.findOne(
			{ id: user.sub },
			{
				profiles: {
					take: 1,
				}
			}
		);

		if (!tryUser) {
			throw new NotFoundException('User not found');
		}

		return tryUser;
	}

	@Mutation(() => UserModel)
	@UseGuards(AuthAccessGuard)
	async updateMe(
		@CurrentUser() user: JwtPayload,
		@Args('input') input: UpdateUserInput,
	) {
		if (Object.keys(input).length === 0) 
			throw new BadRequestException('Noting to update');
		return await this.usersService.update(user.sub, input);
	}

	@Query(() => [UserModel])
	@Roles('ADMIN')
	async users(@Args('input') input: FindUserInput) {
		if (Object.keys(input).length === 0) 
			throw new BadRequestException('Noting to update');
		return this.usersService.findAll(input);
	}
}