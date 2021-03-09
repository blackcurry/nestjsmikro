import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { options } from "../mikro-orm.config";
import { AppService } from "app.service";

@Module({
  imports: [MikroOrmModule.forRoot(options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
