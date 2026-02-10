import { Field, ObjectType } from "@nestjs/graphql";
import { UserModel } from "src/modules/users/models";

@ObjectType()
export class RecipeCommentModel {
    @Field(() => String)
    id: string;

    @Field(() => UserModel)
    user: UserModel;

    @Field(() => String)
    text: string;

    @Field(() => Date)
    createdAt: Date;
    @Field(() => Date)
    updatedAt: Date;
    @Field(() => Date)
    deletedAt: Date;
}