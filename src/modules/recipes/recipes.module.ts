import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { IngredientsResolver } from './ingredients.resolver'
import { IngredientsService, RecipeCategoriesService, RecipeCommentsService, RecipeLikesService, RecipesService } from './services'
import { RecipesResolver } from './recipes.resolver'
import { RecipeCommentsResolver } from './recipe-comments.resolver'

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
		RecipeCommentsService,
		RecipeCommentsResolver,
	]
})
export class RecipesModule { }