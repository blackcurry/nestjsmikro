import { MikroOrmModuleOptions } from "@mikro-orm/nestjs";

export const options: MikroOrmModuleOptions = {
  entities: [`./dist/src/**/entities/*.entities.js`],
  entitiesTs: [`./src/**/entities/*.entities.ts`],
  dbName: "author",
  type: "postgresql",
  clientUrl: "postgresql://postgres@127.0.0.1:5432/postgres",
};

export default options;
