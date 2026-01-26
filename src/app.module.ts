import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { AppResolver } from './app.resolver'
import { graphqlConfig } from './configs'
import { TasksModule } from './modules/tasks/tasks.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: graphqlConfig,
    }),

    TasksModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
