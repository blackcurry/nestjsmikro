import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Post } from "post/entities/post.entities";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Author {
  @Field(() => ID)
  @PrimaryKey()
  id!: string;

  @Field()
  @Property()
  name!: string;

  @Field()
  @Property()
  post: Post;

  // graphql only
  @Field()
  todayPostCnt?: number;
}
