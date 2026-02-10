import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateRecipeCommentInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    recipeCommentId: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(300)
    @Field(() => String)
    text: string;
}