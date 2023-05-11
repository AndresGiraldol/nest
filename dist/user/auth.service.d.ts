import { UserService } from './user.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    signup(email: string, password: string): Promise<import("./user.entity").User>;
    signin(email: string, password: string): Promise<import("./user.entity").User>;
}
