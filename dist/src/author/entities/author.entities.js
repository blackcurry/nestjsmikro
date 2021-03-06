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
exports.Author = void 0;
const core_1 = require("@mikro-orm/core");
const post_entities_1 = require("../../post/entities/post.entities");
let Author = class Author {
    constructor() {
        this.post = new core_1.Collection(this);
    }
};
__decorate([
    core_1.PrimaryKey({ type: core_1.BigIntType, comment: "PK" }),
    __metadata("design:type", String)
], Author.prototype, "id", void 0);
__decorate([
    core_1.Property({ nullable: true }),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    core_1.OneToMany(() => post_entities_1.Post, (post) => post.author, {
        nullable: true,
        orphanRemoval: true,
    }),
    __metadata("design:type", Object)
], Author.prototype, "post", void 0);
__decorate([
    core_1.Property({ persist: false, nullable: true }),
    __metadata("design:type", Number)
], Author.prototype, "postTotal", void 0);
Author = __decorate([
    core_1.Entity()
], Author);
exports.Author = Author;
//# sourceMappingURL=author.entities.js.map