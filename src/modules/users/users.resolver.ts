import { NotFoundException, UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { User } from 'src/common/decorators/user.decorator'
import { AuthAccessGuard } from 'src/common/guards'
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
		const tryUser = await this.usersService.find({id: user.sub});

		if (!tryUser) {
			throw new NotFoundException('User not found');
		}

		return tryUser;
	}
}