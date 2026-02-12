import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class FindOneOrderInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    id: string;
}