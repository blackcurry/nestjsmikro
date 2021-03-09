"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    entities: [`./dist/src/**/entities/*.entities.js`],
    entitiesTs: [`./src/**/entities/*.entities.ts`],
    dbName: 'postgres',
    type: 'postgresql',
    clientUrl: 'postgresql://postgres@127.0.0.1:5432/postgres',
};
exports.default = exports.options;
//# sourceMappingURL=mikro-orm.config.js.map