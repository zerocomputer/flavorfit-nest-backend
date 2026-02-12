import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
class OrderRecipe {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    recipeId: string;

    @IsNotEmpty()
    @IsNumber()
    @Field(() => Number)
    units: number;
}

@InputType()
class OrderIngredient {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    ingredientId: string;

    @IsNotEmpty()
    @IsNumber()
    @Field(() => Number)
    units: number;
}

@InputType()
export class CreateOrderInput {
    @IsString()
    @Field(() => String)
    address: string

    @IsOptional()
    @Field(() => [OrderRecipe])
    recipes?: OrderRecipe[]

    @IsOptional()
    @Field(() => [OrderIngredient])
    ingredients?: OrderIngredient[]
}