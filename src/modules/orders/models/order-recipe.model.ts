import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class OrderRecipeModel {
    @Field(() => String)
    id: string

    @Field(() => String)
    orderId: string
    @Field(() => String)
    recipeId: string

    @Field(() => Number)
    units: number
    @Field(() => Number)
    costPerUnit: number
}