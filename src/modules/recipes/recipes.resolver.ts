import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { RecipesService } from "./services/recipes.service";
import { RecipeImageModel, RecipeIngredientModel, RecipeModel } from "./models";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import { AddImageRecipeInput, AddIngredientRecipeInput, CreateRecipeInput, FindAllRecipeInput, FindOneRecipeInput, UpdateImageRecipeInput, UpdateIngredientRecipeInput, UpdateRecipeInput } from "./dto";
import { UseGuards } from "@nestjs/common";
import { AuthAccessGuard } from "src/common/guards";

@Resolver()
export class RecipesResolver {
    constructor(
        private readonly recipesService: RecipesService,
    ) { }

    ///////////////////////////
    // Recipes
    //////////////////////////

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeModel)
    async createRecipe(
        @CurrentUser('id') userId: string,
        @Args('input') input: CreateRecipeInput,
    ) {
        return this.recipesService.create(userId, input);
    }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeModel)
    async updateRecipe(
        @Args('recipeId') recipeId: string,
        @Args('input') input: UpdateRecipeInput,
    ) {
        return this.recipesService.update(recipeId, input);
    }

    @UseGuards(AuthAccessGuard)
    @Query(() => RecipeModel)
    async findOneRecipe(
        @Args('input') input: FindOneRecipeInput,
    ) {
        return this.recipesService.findOne(input);
    }

    @UseGuards(AuthAccessGuard)
    @Query(() => RecipeModel)
    async findAllRecipe(
        @Args('input') input: FindAllRecipeInput,
    ) {
        return this.recipesService.findAll(input);
    }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => Boolean)
    async removeRecipe(
        @Args('recipeId') recipeId: string,
    ) {
        await this.recipesService.remove(recipeId);
        return true;
    }

    ///////////////////////////
    // Recipe Ingredient
    //////////////////////////

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeIngredientModel)
    async addRecipeIngredient(
        @Args('input') input: AddIngredientRecipeInput,
    ) {
        return this.recipesService.addIngredient(input);
    }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeIngredientModel)
    async updateRecipeIngredient(
        @Args('input') input: UpdateIngredientRecipeInput,
    ) {
        return this.recipesService.updateIngredient(input);
    }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => Boolean)
    async removeRecipeIngredient(
        @Args('ingredientRecipeId') ingredientRecipeId: string,
    ) {
        await this.recipesService.removeIngredient(ingredientRecipeId);
        return true;
    }

    ///////////////////////////
    // Recipe Images
    //////////////////////////

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeImageModel)
    async addRecipeImage(
        @Args('input') input: AddImageRecipeInput,
    ) {
        return this.recipesService.addImage(input);
    }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeImageModel)
    async updateRecipeImage(
        @Args('input') input: UpdateImageRecipeInput,
    ) {
        return this.recipesService.updateImage(input);
    }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => Boolean)
    async removeRecipeImage(
        @Args('imageRecipeId') imageRecipeId: string,
    ) {
        await this.recipesService.removeImage(imageRecipeId);
        return true;
    }
}