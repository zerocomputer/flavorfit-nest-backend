import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ProfileModel {
	@Field(() => String)
	id: string;

	@Field(() => Number)
	height: number;   
	@Field(() => Number)          
  currentWeight: number;      
	@Field(() => Number)
  targetWeight: number;       
	@Field(() => Number)
  waistCircumference: number; 
	@Field(() => Number)
  chestCircumference: number; 
	@Field(() => Number)
  hipsCircumference: number;  
	@Field(() => Number)
  armCircumference: number;   

	@Field(() => Date)
	createdAt: Date;
}