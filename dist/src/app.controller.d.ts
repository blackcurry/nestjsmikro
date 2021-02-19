export declare class AppController {
    login(): Promise<{
        code: number;
        msg: string;
        data: any;
    }>;
}
