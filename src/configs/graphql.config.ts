import { ConfigService } from '@nestjs/config'

export const graphqlConfig = (configService: ConfigService) => ({
	autoSchemaFile: true,
	sortSchema: true,
	playground: configService.getOrThrow('NODE_ENV') !== 'production',
	context: ({ req, res }) => ({ req, res }),
})