import { Field, Float, ObjectType, registerEnumType } from "@nestjs/graphql";
import { OrderStatus } from "prisma/generated/prisma/enums";
import { UserModel } from "src/modules/users/models";

registerEnumType(OrderStatus)

@ObjectType()
export class OrderModel {
    @Field(() => String)
    id: string

    @Field(() => UserModel)
    customer: UserModel

    @Field(() => UserModel)
    courier: UserModel

    @Field(() => String)
    address: string
    @Field(() => Float)
    cost: number
    @Field(() => OrderStatus)
    status: OrderStatus

    @Field(() => Date)
    deliveryTo: Date

    @Field(() => Date)
    createdAt: Date
    @Field(() => Date)
    updatedAt: Date
    @Field(() => Date)
    closedAt?: Date
}