import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString } from "class-validator";
import { PaginationInput } from "src/common/dto";

@InputType()
export class FindAllOrderInput extends PaginationInput {
    @IsOptional()
    @IsBoolean()
    @Field(() => Boolean)
    closed?: boolean;

}