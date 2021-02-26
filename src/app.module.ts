import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { options } from "../mikro-orm.config";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [MikroOrmModule.forRoot(options), GraphQLModule.forRoot({})],
  controllers: [AppController],
})
export class AppModule {}
