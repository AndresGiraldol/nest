import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(email: string, password: string): Promise<User>;
    findOne(id: number): Promise<User>;
    find(email: string): Promise<User[]>;
    update(id: number, args: Partial<User>): Promise<User>;
    remove(id: number): Promise<User>;
}
