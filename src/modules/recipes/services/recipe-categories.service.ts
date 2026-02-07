import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services";
import { CreateRecipeCategoryInput } from "../dto";

@Injectable()
export class RecipeCategoriesService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    /**
     * Создать категорию рецепта
     * @param input 
     * @returns 
     */
    async create(input: CreateRecipeCategoryInput) {
        return this.prismaService.recipeCategory.create({
            data: input,
        });
    }
}