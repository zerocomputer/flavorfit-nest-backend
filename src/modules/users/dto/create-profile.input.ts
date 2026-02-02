import { Field, InputType } from '@nestjs/graphql'
import { IsNumber } from 'class-validator'

@InputType()
export class CreateProfileInput {
	@IsNumber()
	@Field(() => Number)
	height: number;   
	@IsNumber()
	@Field(() => Number)          
  currentWeight: number;   
	@IsNumber()   
	@Field(() => Number)
  targetWeight: number;   
	@IsNumber()    
	@Field(() => Number)
  waistCircumference: number; 
	@IsNumber()
	@Field(() => Number)
  chestCircumference: number; 
	@IsNumber()
	@Field(() => Number)
  hipsCircumference: number;
	@IsNumber()  
	@Field(() => Number)
  armCircumference: number;   
}