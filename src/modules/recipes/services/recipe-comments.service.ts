import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services";
import { CreateRecipeCommentInput, FindAllRecipeCommentsInput, UpdateRecipeCommentInput } from "../dto";

@Injectable()
export class RecipeCommentsService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    /**
     * Создание комментария
     * @param userId 
     * @param input 
     * @returns 
     */
    async create(userId: string, input: CreateRecipeCommentInput) {
        return this.prismaService.recipeComment.create({
            data: {
                userId,
                ...input,
            }
        });
    }

    /**
     * Получение комментариев к рецепту с пагинацией
     * @param input 
     */
    async findAll({ take, skip, ...where }: FindAllRecipeCommentsInput) {
        return this.prismaService.recipeComment.findMany({
            take,
            skip,
            where,
        });
    }

    /**
     * Получение одного по ID
     * @param id 
     * @returns 
     */
    async findOne(id: string) {
        return this.prismaService.recipeComment.findUnique({
            where: { id }
        });
    }

    /**
     * Обновить (текст)
     * @param param0 
     * @returns 
     */
    async update({ recipeCommentId, ...input }: UpdateRecipeCommentInput) {
        return this.prismaService.recipeComment.update({
            where: { id: recipeCommentId },
            data: { ...input },
        })
    }

    /**
     * Мягкое удаление
     * @param id 
     * @returns 
     */
    async delete(id: string) {
        return this.prismaService.recipeComment.update({
            where: { id },
            data: {
                deletedAt: new Date(),
            }
        });
    }
}