import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services";
import { RecipeOrCommentLikeInput } from "../dto";
import { RecipeOrCommentLikesWhereInput } from "prisma/generated/prisma/models";

@Injectable()
export class RecipeLikesService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    /**
     * Универсальный метод переключения статуса лайка у комментария к рецепту или рецепта
     * @param userId 
     * @param input 
     * @returns 
     */
    async toggle(userId: string, input: RecipeOrCommentLikeInput) {
        let where: RecipeOrCommentLikesWhereInput = { userId };

        if (input.recipeId) {
            where.recipeId = input.recipeId;
        }

        if (input.recipeCommentId) {
            where.recipeCommentId = input.recipeCommentId;
        }

        let tryGetLike = await this.prismaService.recipeOrCommentLikes.findFirst({ where });

        if (tryGetLike) {
            if (tryGetLike.deletedAt === null) {
                await this.prismaService.recipeOrCommentLikes.update({ where: { id: tryGetLike.id }, data: { deletedAt: new Date() } });
                return false;
            } else {
                await this.prismaService.recipeOrCommentLikes.update({ where: { id: tryGetLike.id }, data: { deletedAt: null } });
                return true;
            }
        }

        await this.prismaService.recipeOrCommentLikes.create({ data: { ...input, userId } });
        return true;
    }
}