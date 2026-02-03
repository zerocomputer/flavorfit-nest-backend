import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { IngredientsResolver } from './ingredients.resolver'
import { IngredientsService } from './services'

@Module({
	imports: [
		PrismaModule,
	],
	providers: [
		IngredientsService,
		IngredientsResolver,
	]
})
export class RecipesModule {}