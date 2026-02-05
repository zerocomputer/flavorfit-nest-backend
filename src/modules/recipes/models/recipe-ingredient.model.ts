import { Field, ObjectType } from "@nestjs/graphql";
import { RecipeModel } from "./recipe.model";
import { IngredientModel } from "./ingredient.model";

@ObjectType()
export class RecipeIngredientModel {
    @Field(() => String)
    id: string;

    @Field(() => RecipeModel)
    recipe: RecipeModel

    @Field(() => IngredientModel)
    ingredient: IngredientModel

    @Field(() => Number)
    units: number
}