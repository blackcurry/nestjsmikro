import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { options } from "../mikro-orm.config";

@Module({
  imports: [MikroOrmModule.forRoot(options)],
  controllers: [AppController],
})
export class AppModule {}
