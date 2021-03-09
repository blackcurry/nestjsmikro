import request from "supertest";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { INestApplication } from "@nestjs/common";
import { MikroORM } from "@mikro-orm/core";

describe("test (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    const orm = app.get<MikroORM>(MikroORM);
    orm.close();
    await app.close();
  });

  it("GET /getAuthor", () => {
    expect(app).toBeDefined();

    return request(app.getHttpServer())
      .get("/getAuthor")
      .expect(200)
      .expect(({ body }) => {
        expect(body).toBeDefined();
      });
  });
});
