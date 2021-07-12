import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  BigIntType,
} from "@mikro-orm/core";
import { Author } from "../../author/entities/author.entities";

@Entity()
export class Post {
  @PrimaryKey({ type: BigIntType, comment: "PK" })
  id!: string;

  @Property({ nullable: true })
  title!: string;

  @Property({ nullable: true })
  body!: string;

  @ManyToOne(() => Author)
  author!: Author;
}
