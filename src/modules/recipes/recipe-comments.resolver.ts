import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { RecipeCommentsService, RecipesService } from "./services";
import { RecipeCommentModel } from "./models";
import { BadRequestException, ForbiddenException, NotFoundException, UseGuards } from "@nestjs/common";
import { AuthAccessGuard } from "src/common/guards";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import type { JwtPayload } from "src/common/interfaces";
import { CreateRecipeCommentInput, FindAllRecipeCommentsInput, UpdateRecipeCommentInput } from "./dto";

@Resolver()
export class RecipeCommentsResolver {
    constructor(
        private readonly recipeService: RecipesService,
        private readonly recipeCommentsService: RecipeCommentsService,
    ) { }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeCommentModel)
    async createRecipeComment(
        @CurrentUser() user: JwtPayload,
        @Args('input') input: CreateRecipeCommentInput,
    ) {
        if (!(await this.recipeService.findOne({ id: input.recipeId }))) {
            throw new BadRequestException('Recipe with input identifier not exists');
        }

        return this.recipeCommentsService.create(user.sub, input);
    }

    @UseGuards(AuthAccessGuard)
    @Query(() => [RecipeCommentModel])
    async findAllRecipeComments(
        @Args('input') input: FindAllRecipeCommentsInput,
    ) {
        return this.recipeCommentsService.findAll(input);
    }

    @UseGuards(AuthAccessGuard)
    @Query(() => RecipeCommentModel)
    async findOneRecipeComment(
        @Args('recipeCommentId') recipeCommentId: string,
    ) {
        return this.recipeCommentsService.findOne(recipeCommentId);
    }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeCommentModel)
    async updateRecipeComment(
        @CurrentUser() user: JwtPayload,
        @Args('input') input: UpdateRecipeCommentInput,
    ) {
        const recipeComment = await this.recipeCommentsService.findOne(input.recipeCommentId);

        if (!recipeComment) {
            throw new NotFoundException('Recipe comment was not found');
        }

        if (recipeComment.userId !== user.sub && ['COURIER', 'USER'].includes(user.r)) {
            throw new ForbiddenException("You haven't rights for this action");
        }

        return this.recipeCommentsService.update(input);
    }

    @UseGuards(AuthAccessGuard)
    @Mutation(() => RecipeCommentModel)
    async deleteRecipeComment(
        @CurrentUser() user: JwtPayload,
        @Args('recipeCommentId') recipeCommentId: string,
    ) {
        const recipeComment = await this.recipeCommentsService.findOne(recipeCommentId);

        if (!recipeComment) {
            throw new NotFoundException('Recipe comment was not found');
        }

        if (recipeComment.userId !== user.sub && ['COURIER', 'USER'].includes(user.r)) {
            throw new ForbiddenException("You haven't rights for this action");
        }

        return this.recipeCommentsService.delete(recipeCommentId);
    }
}