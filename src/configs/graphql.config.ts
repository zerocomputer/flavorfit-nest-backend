import { ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigService } from '@nestjs/config'
import { join } from 'path';

interface GraphQlContext {
	req: Request;
	res: Response;
}

export const graphqlConfig = (configService: ConfigService): Omit<ApolloDriverConfig, "driver"> => ({
	autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
	sortSchema: true,
	context: (context: GraphQlContext) => ({ req: context.req, res: context.res }),
	fieldResolverEnhancers: ["guards", "interceptors", "filters"],
	playground: configService.getOrThrow('NODE_ENV') !== 'production' ? {
		settings: {
			'request.credentials': 'include', // Разрешает Playground отправлять cookies
		},
	} : false,
})