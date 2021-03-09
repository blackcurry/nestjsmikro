import { Controller, Get, UsePipes } from "@nestjs/common";
import { AppService } from "app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("getAuthor")
  async getAuthor() {
    return this.appService.getAuthor();
  }
}
