import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, MaxLength } from "class-validator";

@InputType()
export class CreateRecipeCategoryInput {
    @IsNotEmpty()
    @MaxLength(120)
    @Field(() => String)
    name: string

    @IsNotEmpty()
    @MaxLength(120)
    @Field(() => String)
    icon: string

    @IsOptional()
    @Field(() => String, { nullable: true })
    parentId?: string
}