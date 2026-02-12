import { Field } from "@nestjs/graphql";

export class OrderIngredient {
    @Field(() => String)
    id: string

    @Field(() => String)
    orderId: string
    @Field(() => String)
    ingredientId: string

    @Field(() => Number)
    units: number
    @Field(() => Number)
    costPerUnit: number
}