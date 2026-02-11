import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddImageRecipeInput = {
  imageUrl: Scalars['String']['input'];
  index: Scalars['Float']['input'];
  recipeId: Scalars['String']['input'];
};

export type AddIngredientRecipeInput = {
  ingredientId: Scalars['String']['input'];
  recipeId: Scalars['String']['input'];
  units: Scalars['Float']['input'];
};

export type AuthModel = {
  __typename?: 'AuthModel';
  accessToken: Scalars['String']['output'];
};

export type CreateIngredientInput = {
  description: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  maxUnitsForOrder: Scalars['Float']['input'];
  minUnitsForOrder: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  unit: Scalars['String']['input'];
};

export type CreateProfileInput = {
  armCircumference: Scalars['Float']['input'];
  chestCircumference: Scalars['Float']['input'];
  currentWeight: Scalars['Float']['input'];
  height: Scalars['Float']['input'];
  hipsCircumference: Scalars['Float']['input'];
  targetWeight: Scalars['Float']['input'];
  waistCircumference: Scalars['Float']['input'];
};

export type CreateRecipeCategoryInput = {
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRecipeCommentInput = {
  recipeId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type CreateRecipeInput = {
  canBeOrder: Scalars['Boolean']['input'];
  carbohydrates: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  cookingTime: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  difficulty: Difficulty;
  fat: Scalars['Float']['input'];
  fiber: Scalars['Float']['input'];
  kcal: Scalars['Float']['input'];
  maxUnitsForOrder: Scalars['Float']['input'];
  minUnitsForOrder: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  protein: Scalars['Float']['input'];
  weight: Scalars['Float']['input'];
};

export enum Difficulty {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type FindAllIngredientInput = {
  deleted?: Scalars['Boolean']['input'];
  skip?: Scalars['Float']['input'];
  take?: Scalars['Float']['input'];
};

export type FindAllRecipeCommentsInput = {
  recipeId: Scalars['String']['input'];
  skip?: Scalars['Float']['input'];
  take?: Scalars['Float']['input'];
};

export type FindAllRecipeInput = {
  canBeOrder?: InputMaybe<Scalars['Boolean']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  deleted?: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Float']['input'];
  take?: Scalars['Float']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type FindIngredientInput = {
  deleted?: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FindOneRecipeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type FindUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type IngredientModel = {
  __typename?: 'IngredientModel';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  endingAt: Scalars['DateTime']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  maxUnitsForOrder: Scalars['Float']['output'];
  minUnitsForOrder: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  unit: Unit;
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRecipeImage: RecipeImageModel;
  addRecipeIngredient: RecipeIngredientModel;
  createIngredient: IngredientModel;
  createProfile: ProfileModel;
  createRecipe: RecipeModel;
  createRecipeCategory: RecipeCategoryModel;
  createRecipeComment: RecipeCommentModel;
  deleteIngredient: Scalars['Boolean']['output'];
  deleteRecipeComment: RecipeCommentModel;
  logout: Scalars['Boolean']['output'];
  refreshToken: AuthModel;
  removeRecipe: Scalars['Boolean']['output'];
  removeRecipeImage: Scalars['Boolean']['output'];
  removeRecipeIngredient: Scalars['Boolean']['output'];
  signIn: AuthModel;
  signUp: AuthModel;
  updateIngredient: IngredientModel;
  updateMe: UserModel;
  updateRecipe: RecipeModel;
  updateRecipeComment: RecipeCommentModel;
  updateRecipeImage: RecipeImageModel;
  updateRecipeIngredient: RecipeIngredientModel;
};


export type MutationAddRecipeImageArgs = {
  input: AddImageRecipeInput;
};


export type MutationAddRecipeIngredientArgs = {
  input: AddIngredientRecipeInput;
};


export type MutationCreateIngredientArgs = {
  input: CreateIngredientInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateRecipeArgs = {
  input: CreateRecipeInput;
};


export type MutationCreateRecipeCategoryArgs = {
  input: CreateRecipeCategoryInput;
};


export type MutationCreateRecipeCommentArgs = {
  input: CreateRecipeCommentInput;
};


export type MutationDeleteIngredientArgs = {
  ingredientId: Scalars['String']['input'];
};


export type MutationDeleteRecipeCommentArgs = {
  recipeCommentId: Scalars['String']['input'];
};


export type MutationRemoveRecipeArgs = {
  recipeId: Scalars['String']['input'];
};


export type MutationRemoveRecipeImageArgs = {
  imageRecipeId: Scalars['String']['input'];
};


export type MutationRemoveRecipeIngredientArgs = {
  ingredientRecipeId: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateIngredientArgs = {
  ingredientId: Scalars['String']['input'];
  input: UpdateIngredientInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateRecipeArgs = {
  input: UpdateRecipeInput;
  recipeId: Scalars['String']['input'];
};


export type MutationUpdateRecipeCommentArgs = {
  input: UpdateRecipeCommentInput;
};


export type MutationUpdateRecipeImageArgs = {
  input: UpdateImageRecipeInput;
};


export type MutationUpdateRecipeIngredientArgs = {
  input: UpdateIngredientRecipeInput;
};

export type ProfileModel = {
  __typename?: 'ProfileModel';
  armCircumference: Scalars['Float']['output'];
  chestCircumference: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currentWeight: Scalars['Float']['output'];
  height: Scalars['Float']['output'];
  hipsCircumference: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  targetWeight: Scalars['Float']['output'];
  waistCircumference: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAllIngredients: Array<IngredientModel>;
  findAllRecipe: RecipeModel;
  findAllRecipeComments: Array<RecipeCommentModel>;
  findOneIngredient: IngredientModel;
  findOneRecipe: RecipeModel;
  findOneRecipeComment: RecipeCommentModel;
  hello: Scalars['String']['output'];
  likeRecipeOrComment: Scalars['Boolean']['output'];
  me: UserModel;
  users: Array<UserModel>;
};


export type QueryFindAllIngredientsArgs = {
  input: FindAllIngredientInput;
};


export type QueryFindAllRecipeArgs = {
  input: FindAllRecipeInput;
};


export type QueryFindAllRecipeCommentsArgs = {
  input: FindAllRecipeCommentsInput;
};


export type QueryFindOneIngredientArgs = {
  input: FindIngredientInput;
};


export type QueryFindOneRecipeArgs = {
  input: FindOneRecipeInput;
};


export type QueryFindOneRecipeCommentArgs = {
  recipeCommentId: Scalars['String']['input'];
};


export type QueryLikeRecipeOrCommentArgs = {
  input: RecipeOrCommentLikeInput;
};


export type QueryUsersArgs = {
  input: FindUserInput;
};

export type RecipeCategoryModel = {
  __typename?: 'RecipeCategoryModel';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent: RecipeCategoryModel;
};

export type RecipeCommentModel = {
  __typename?: 'RecipeCommentModel';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
};

export type RecipeImageModel = {
  __typename?: 'RecipeImageModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  index: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeIngredientModel = {
  __typename?: 'RecipeIngredientModel';
  id: Scalars['String']['output'];
  ingredient: IngredientModel;
  recipe: RecipeModel;
  units: Scalars['Float']['output'];
};

export type RecipeModel = {
  __typename?: 'RecipeModel';
  canBeOrder: Scalars['Boolean']['output'];
  carbohydrates: Scalars['Float']['output'];
  category: RecipeCategoryModel;
  cookingTime: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  difficulty: Difficulty;
  fat: Scalars['Float']['output'];
  fiber: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  images: Array<RecipeImageModel>;
  kcal: Scalars['Float']['output'];
  maxUnitsForOrder: Scalars['Float']['output'];
  minUnitsForOrder: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  protein: Scalars['Float']['output'];
  user: UserModel;
  weight: Scalars['Float']['output'];
};

export type RecipeOrCommentLikeInput = {
  recipeCommentId: Scalars['String']['input'];
  recipeId: Scalars['String']['input'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum Unit {
  Gram = 'GRAM',
  Ml = 'ML',
  Units = 'UNITS'
}

export type UpdateImageRecipeInput = {
  id: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  index: Scalars['Float']['input'];
};

export type UpdateIngredientInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  maxUnitsForOrder?: InputMaybe<Scalars['Float']['input']>;
  minUnitsForOrder?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateIngredientRecipeInput = {
  id: Scalars['String']['input'];
  units: Scalars['Float']['input'];
};

export type UpdateRecipeCommentInput = {
  recipeCommentId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type UpdateRecipeInput = {
  canBeOrder?: InputMaybe<Scalars['Boolean']['input']>;
  carbohydrates?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cookingTime?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Difficulty>;
  fat?: InputMaybe<Scalars['Float']['input']>;
  fiber?: InputMaybe<Scalars['Float']['input']>;
  kcal?: InputMaybe<Scalars['Float']['input']>;
  maxUnitsForOrder?: InputMaybe<Scalars['Float']['input']>;
  minUnitsForOrder?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  protein?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  biography: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  photoUrl: Scalars['String']['output'];
  profiles: Array<ProfileModel>;
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddImageRecipeInput: AddImageRecipeInput;
  AddIngredientRecipeInput: AddIngredientRecipeInput;
  AuthModel: ResolverTypeWrapper<AuthModel>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateIngredientInput: CreateIngredientInput;
  CreateProfileInput: CreateProfileInput;
  CreateRecipeCategoryInput: CreateRecipeCategoryInput;
  CreateRecipeCommentInput: CreateRecipeCommentInput;
  CreateRecipeInput: CreateRecipeInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Difficulty: Difficulty;
  FindAllIngredientInput: FindAllIngredientInput;
  FindAllRecipeCommentsInput: FindAllRecipeCommentsInput;
  FindAllRecipeInput: FindAllRecipeInput;
  FindIngredientInput: FindIngredientInput;
  FindOneRecipeInput: FindOneRecipeInput;
  FindUserInput: FindUserInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  IngredientModel: ResolverTypeWrapper<IngredientModel>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  ProfileModel: ResolverTypeWrapper<ProfileModel>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RecipeCategoryModel: ResolverTypeWrapper<RecipeCategoryModel>;
  RecipeCommentModel: ResolverTypeWrapper<RecipeCommentModel>;
  RecipeImageModel: ResolverTypeWrapper<RecipeImageModel>;
  RecipeIngredientModel: ResolverTypeWrapper<RecipeIngredientModel>;
  RecipeModel: ResolverTypeWrapper<RecipeModel>;
  RecipeOrCommentLikeInput: RecipeOrCommentLikeInput;
  SignInInput: SignInInput;
  SignUpInput: SignUpInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Unit: Unit;
  UpdateImageRecipeInput: UpdateImageRecipeInput;
  UpdateIngredientInput: UpdateIngredientInput;
  UpdateIngredientRecipeInput: UpdateIngredientRecipeInput;
  UpdateRecipeCommentInput: UpdateRecipeCommentInput;
  UpdateRecipeInput: UpdateRecipeInput;
  UpdateUserInput: UpdateUserInput;
  UserModel: ResolverTypeWrapper<UserModel>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddImageRecipeInput: AddImageRecipeInput;
  AddIngredientRecipeInput: AddIngredientRecipeInput;
  AuthModel: AuthModel;
  Boolean: Scalars['Boolean']['output'];
  CreateIngredientInput: CreateIngredientInput;
  CreateProfileInput: CreateProfileInput;
  CreateRecipeCategoryInput: CreateRecipeCategoryInput;
  CreateRecipeCommentInput: CreateRecipeCommentInput;
  CreateRecipeInput: CreateRecipeInput;
  DateTime: Scalars['DateTime']['output'];
  FindAllIngredientInput: FindAllIngredientInput;
  FindAllRecipeCommentsInput: FindAllRecipeCommentsInput;
  FindAllRecipeInput: FindAllRecipeInput;
  FindIngredientInput: FindIngredientInput;
  FindOneRecipeInput: FindOneRecipeInput;
  FindUserInput: FindUserInput;
  Float: Scalars['Float']['output'];
  IngredientModel: IngredientModel;
  Mutation: Record<PropertyKey, never>;
  ProfileModel: ProfileModel;
  Query: Record<PropertyKey, never>;
  RecipeCategoryModel: RecipeCategoryModel;
  RecipeCommentModel: RecipeCommentModel;
  RecipeImageModel: RecipeImageModel;
  RecipeIngredientModel: RecipeIngredientModel;
  RecipeModel: RecipeModel;
  RecipeOrCommentLikeInput: RecipeOrCommentLikeInput;
  SignInInput: SignInInput;
  SignUpInput: SignUpInput;
  String: Scalars['String']['output'];
  UpdateImageRecipeInput: UpdateImageRecipeInput;
  UpdateIngredientInput: UpdateIngredientInput;
  UpdateIngredientRecipeInput: UpdateIngredientRecipeInput;
  UpdateRecipeCommentInput: UpdateRecipeCommentInput;
  UpdateRecipeInput: UpdateRecipeInput;
  UpdateUserInput: UpdateUserInput;
  UserModel: UserModel;
};

export type AuthModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthModel'] = ResolversParentTypes['AuthModel']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IngredientModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['IngredientModel'] = ResolversParentTypes['IngredientModel']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endingAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxUnitsForOrder?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minUnitsForOrder?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addRecipeImage?: Resolver<ResolversTypes['RecipeImageModel'], ParentType, ContextType, RequireFields<MutationAddRecipeImageArgs, 'input'>>;
  addRecipeIngredient?: Resolver<ResolversTypes['RecipeIngredientModel'], ParentType, ContextType, RequireFields<MutationAddRecipeIngredientArgs, 'input'>>;
  createIngredient?: Resolver<ResolversTypes['IngredientModel'], ParentType, ContextType, RequireFields<MutationCreateIngredientArgs, 'input'>>;
  createProfile?: Resolver<ResolversTypes['ProfileModel'], ParentType, ContextType, RequireFields<MutationCreateProfileArgs, 'input'>>;
  createRecipe?: Resolver<ResolversTypes['RecipeModel'], ParentType, ContextType, RequireFields<MutationCreateRecipeArgs, 'input'>>;
  createRecipeCategory?: Resolver<ResolversTypes['RecipeCategoryModel'], ParentType, ContextType, RequireFields<MutationCreateRecipeCategoryArgs, 'input'>>;
  createRecipeComment?: Resolver<ResolversTypes['RecipeCommentModel'], ParentType, ContextType, RequireFields<MutationCreateRecipeCommentArgs, 'input'>>;
  deleteIngredient?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteIngredientArgs, 'ingredientId'>>;
  deleteRecipeComment?: Resolver<ResolversTypes['RecipeCommentModel'], ParentType, ContextType, RequireFields<MutationDeleteRecipeCommentArgs, 'recipeCommentId'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['AuthModel'], ParentType, ContextType>;
  removeRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveRecipeArgs, 'recipeId'>>;
  removeRecipeImage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveRecipeImageArgs, 'imageRecipeId'>>;
  removeRecipeIngredient?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveRecipeIngredientArgs, 'ingredientRecipeId'>>;
  signIn?: Resolver<ResolversTypes['AuthModel'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'input'>>;
  signUp?: Resolver<ResolversTypes['AuthModel'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  updateIngredient?: Resolver<ResolversTypes['IngredientModel'], ParentType, ContextType, RequireFields<MutationUpdateIngredientArgs, 'ingredientId' | 'input'>>;
  updateMe?: Resolver<ResolversTypes['UserModel'], ParentType, ContextType, RequireFields<MutationUpdateMeArgs, 'input'>>;
  updateRecipe?: Resolver<ResolversTypes['RecipeModel'], ParentType, ContextType, RequireFields<MutationUpdateRecipeArgs, 'input' | 'recipeId'>>;
  updateRecipeComment?: Resolver<ResolversTypes['RecipeCommentModel'], ParentType, ContextType, RequireFields<MutationUpdateRecipeCommentArgs, 'input'>>;
  updateRecipeImage?: Resolver<ResolversTypes['RecipeImageModel'], ParentType, ContextType, RequireFields<MutationUpdateRecipeImageArgs, 'input'>>;
  updateRecipeIngredient?: Resolver<ResolversTypes['RecipeIngredientModel'], ParentType, ContextType, RequireFields<MutationUpdateRecipeIngredientArgs, 'input'>>;
};

export type ProfileModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileModel'] = ResolversParentTypes['ProfileModel']> = {
  armCircumference?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  chestCircumference?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currentWeight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hipsCircumference?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetWeight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  waistCircumference?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAllIngredients?: Resolver<Array<ResolversTypes['IngredientModel']>, ParentType, ContextType, RequireFields<QueryFindAllIngredientsArgs, 'input'>>;
  findAllRecipe?: Resolver<ResolversTypes['RecipeModel'], ParentType, ContextType, RequireFields<QueryFindAllRecipeArgs, 'input'>>;
  findAllRecipeComments?: Resolver<Array<ResolversTypes['RecipeCommentModel']>, ParentType, ContextType, RequireFields<QueryFindAllRecipeCommentsArgs, 'input'>>;
  findOneIngredient?: Resolver<ResolversTypes['IngredientModel'], ParentType, ContextType, RequireFields<QueryFindOneIngredientArgs, 'input'>>;
  findOneRecipe?: Resolver<ResolversTypes['RecipeModel'], ParentType, ContextType, RequireFields<QueryFindOneRecipeArgs, 'input'>>;
  findOneRecipeComment?: Resolver<ResolversTypes['RecipeCommentModel'], ParentType, ContextType, RequireFields<QueryFindOneRecipeCommentArgs, 'recipeCommentId'>>;
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likeRecipeOrComment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryLikeRecipeOrCommentArgs, 'input'>>;
  me?: Resolver<ResolversTypes['UserModel'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['UserModel']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'input'>>;
};

export type RecipeCategoryModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeCategoryModel'] = ResolversParentTypes['RecipeCategoryModel']> = {
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<ResolversTypes['RecipeCategoryModel'], ParentType, ContextType>;
};

export type RecipeCommentModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeCommentModel'] = ResolversParentTypes['RecipeCommentModel']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UserModel'], ParentType, ContextType>;
};

export type RecipeImageModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeImageModel'] = ResolversParentTypes['RecipeImageModel']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type RecipeIngredientModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeIngredientModel'] = ResolversParentTypes['RecipeIngredientModel']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ingredient?: Resolver<ResolversTypes['IngredientModel'], ParentType, ContextType>;
  recipe?: Resolver<ResolversTypes['RecipeModel'], ParentType, ContextType>;
  units?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type RecipeModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeModel'] = ResolversParentTypes['RecipeModel']> = {
  canBeOrder?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  carbohydrates?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['RecipeCategoryModel'], ParentType, ContextType>;
  cookingTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  difficulty?: Resolver<ResolversTypes['Difficulty'], ParentType, ContextType>;
  fat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  fiber?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['RecipeImageModel']>, ParentType, ContextType>;
  kcal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  maxUnitsForOrder?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minUnitsForOrder?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  protein?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UserModel'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type UserModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserModel'] = ResolversParentTypes['UserModel']> = {
  biography?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profiles?: Resolver<Array<ResolversTypes['ProfileModel']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthModel?: AuthModelResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IngredientModel?: IngredientModelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ProfileModel?: ProfileModelResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecipeCategoryModel?: RecipeCategoryModelResolvers<ContextType>;
  RecipeCommentModel?: RecipeCommentModelResolvers<ContextType>;
  RecipeImageModel?: RecipeImageModelResolvers<ContextType>;
  RecipeIngredientModel?: RecipeIngredientModelResolvers<ContextType>;
  RecipeModel?: RecipeModelResolvers<ContextType>;
  UserModel?: UserModelResolvers<ContextType>;
};

