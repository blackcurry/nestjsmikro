"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const postgresql_1 = require("@mikro-orm/postgresql");
const author_entities_1 = require("./author/entities/author.entities");
const post_entities_1 = require("./post/entities/post.entities");
let AppService = class AppService {
    constructor(em) {
        this.em = em;
    }
    async getAuthor() {
        const knex = this.em.getKnex();
        const qb1 = this.em
            .createQueryBuilder(post_entities_1.Post, 'b')
            .count('b.id', true)
            .where({ author: knex.ref('a.id') })
            .as('Author.postTotal');
        const qb2 = this.em.createQueryBuilder(author_entities_1.Author, 'a');
        qb2.select(['*', qb1]).orderBy({ postTotal: 'desc' });
        console.log(qb2.getQuery());
        const list = qb2.execute();
        return list;
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [postgresql_1.EntityManager])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map