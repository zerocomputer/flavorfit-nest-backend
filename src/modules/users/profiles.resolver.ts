import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CurrentUser } from 'src/common/decorators/current-user.decorator'
import { AuthAccessGuard } from 'src/common/guards'
import { CreateProfileInput } from './dto'
import { ProfileModel } from './models'
import { ProfilesService } from './services'

@Resolver()
export class ProfilesResolver {
	constructor(
		private profilesService: ProfilesService,
	) {}

	@Mutation(() => ProfileModel)
	@UseGuards(AuthAccessGuard)
	async createProfile(
		@CurrentUser('sub') userId: string,
		@Args('input') input: CreateProfileInput
	) {
		return await this.profilesService.create(userId, input);
	}
}