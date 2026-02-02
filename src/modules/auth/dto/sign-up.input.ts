import { InputType } from '@nestjs/graphql'
import { CreateUserInput } from 'src/modules/users/dto'

@InputType()
export class SignUpInput extends CreateUserInput {}