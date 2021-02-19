import { Controller, Get, UsePipes } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("alive")
  async login() {
    return {
      code: 200,
      msg: "lol",
      data: null,
    };
  }
}
