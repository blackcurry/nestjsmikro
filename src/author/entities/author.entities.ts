import {
  BigIntType,
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Post } from "../../post/entities/post.entities";

// @Entity({ tableName: 'my.author' })
@Entity()
export class Author {
  @PrimaryKey({ type: BigIntType, comment: "PK" })
  id!: string;

  @Property({ nullable: true })
  name!: string;

  @OneToMany(() => Post, (post) => post.author, {
    nullable: true,
    orphanRemoval: true,
  })
  post? = new Collection<Post>(this);

  @Property({ persist: false, nullable: true })
  postTotal?: number;
}
