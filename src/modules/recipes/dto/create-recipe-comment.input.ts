import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateRecipeCommentInput {
    @IsNotEmpty()
    @IsString()
    @MaxLength(300)
    @Field(() => String)
    text: string;

    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    recipeId: string;
}