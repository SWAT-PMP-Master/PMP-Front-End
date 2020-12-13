export interface LoginResponse {
    error: boolean;
    counter: number;
    status: number;
    body: {
        user: {
            uuid: string;
            Nickname: string;
            email: string;
            rol: string;
        };
        token: string;
    };
}
