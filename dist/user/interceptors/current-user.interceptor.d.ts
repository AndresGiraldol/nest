import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { UserService } from '../user.service';
export declare class CurrentUserInterceptor implements NestInterceptor {
    private userService;
    constructor(userService: UserService);
    intercept(context: ExecutionContext, handle: CallHandler): Promise<import("rxjs").Observable<any>>;
}
