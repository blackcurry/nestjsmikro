import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Author {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  name2!: string;

  @Property()
  community: string;
}
