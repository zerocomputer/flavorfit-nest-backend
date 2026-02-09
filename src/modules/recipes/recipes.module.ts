import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { IngredientsResolver } from './ingredients.resolver'
import { IngredientsService, RecipeCategoriesService, RecipeLikesService, RecipesService } from './services'
import { RecipesResolver } from './recipes.resolver'

@Module({
	imports: [
		PrismaModule,
	],
	providers: [
		IngredientsService,
		IngredientsResolver,
		RecipesService,
		RecipesResolver,
		RecipeCategoriesService,
		RecipeLikesService,
	]
})
export class RecipesModule { }