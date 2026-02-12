import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";
import { PaginationInput } from "src/common/dto";

@InputType()
export class FindAllOrderInput extends PaginationInput {
    @IsOptional()
    @IsString()
    @Field(() => String)
    userId?: string;
}