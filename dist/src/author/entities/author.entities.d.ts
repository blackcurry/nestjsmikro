import { Collection } from "@mikro-orm/core";
import { Post } from "../../post/entities/post.entities";
export declare class Author {
    id: string;
    name: string;
    post?: Collection<Post, unknown>;
    postTotal?: number;
}
