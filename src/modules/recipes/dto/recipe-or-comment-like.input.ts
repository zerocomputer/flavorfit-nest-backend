import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";

@InputType()
export class RecipeOrCommentLikeInput {
    @IsOptional()
    @IsString()
    @Field(() => String)
    recipeCommentId?: string;

    @IsOptional()
    @IsString()
    @Field(() => String)
    recipeId?: string;
}