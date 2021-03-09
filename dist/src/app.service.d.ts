import { EntityManager } from '@mikro-orm/postgresql';
export declare class AppService {
    private readonly em;
    constructor(em: EntityManager);
    getAuthor(): Promise<any>;
}
