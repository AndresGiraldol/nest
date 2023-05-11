import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../user.service';
export declare class CurrentUserMiddleware implements NestMiddleware {
    private userService;
    constructor(userService: UserService);
    use(request: Request, response: Response, next: NextFunction): Promise<void>;
}
