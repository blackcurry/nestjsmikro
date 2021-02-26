import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Post {
  @Field(() => ID)
  @PrimaryKey()
  id!: string;

  @Field()
  @Property()
  title!: string;

  @Field()
  @Property()
  body!: string;
}
