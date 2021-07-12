import { Injectable } from "@nestjs/common";
import { EntityManager } from "@mikro-orm/postgresql";
import { Author } from "author/entities/author.entities";
import { Post } from "post/entities/post.entities";

@Injectable()
export class AppService {
  constructor(private readonly em: EntityManager) {}
  async getAuthor() {
    const knex = this.em.getKnex();

    const qb1 = this.em
      .createQueryBuilder(Post, "b")
      .count("b.id", true)
      .where({ author: knex.ref("a.id") })
      .as("Author.postTotal");
    const qb2 = this.em.createQueryBuilder(Author, "a");
    qb2.select(["*", qb1]).orderBy({ postTotal: "desc" });
    console.log(qb2.getQuery());
    const list = qb2.execute();
    return list;
  }
}
