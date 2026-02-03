import { Field, InputType } from '@nestjs/graphql'
import { PaginationInput } from 'src/common/dto'

@InputType()
export class FindAllIngredientInput extends PaginationInput {
	@Field(() => Boolean, {defaultValue: false})
	deleted?: boolean;
}