import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { PaginationInput } from "src/common/dto";

@InputType()
export class FindAllRecipeCommentsInput extends PaginationInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    recipeId: string;
}