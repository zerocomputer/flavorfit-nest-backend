import { NotFoundException, UseGuards } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { Roles } from 'src/common/decorators'
import { User } from 'src/common/decorators/user.decorator'
import { AuthAccessGuard } from 'src/common/guards'
import { FindWithUserPaginationInput } from './dto'
import { UserModel } from './models/user.model'
import { UsersService } from './services'

@Resolver()
export class UsersResolver {
	constructor(
		private readonly usersService: UsersService,
	) {}

	@Query(() => UserModel)
	@UseGuards(AuthAccessGuard)
	async me(
		@User() user
	): Promise<UserModel> {
		const tryUser = await this.usersService.findOne({id: user.sub});

		if (!tryUser) {
			throw new NotFoundException('User not found');
		}

		return tryUser;
	}

	@Query(() => [UserModel])
	@Roles('ADMIN')
	async users(@Args() args: FindWithUserPaginationInput): Promise<UserModel[]> {
		return this.usersService.findAll(args);
	}
}