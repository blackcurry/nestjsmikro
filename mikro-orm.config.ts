import { MikroOrmModuleOptions } from "@mikro-orm/nestjs";

export const options: MikroOrmModuleOptions = {
  // entities: [`./dist/src/author/entities/author.entities.js`],
  // entitiesTs: [`./src/author/entities/author.entities.ts`],

  entities: [`./dist/src/**/entities/*.entities.js`],
  entitiesTs: [`./src/**/entities/*.entities.ts`],
  dbName: "author",
  type: "postgresql",
};

export default options;
