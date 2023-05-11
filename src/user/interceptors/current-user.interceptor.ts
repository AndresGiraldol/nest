import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { UserService } from '../user.service';
@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private userService: UserService) {}

  async intercept(context: ExecutionContext, handle: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};
    const user = await this.userService.findOne(userId);

    if (user) {
      request.currentUser = user;
    }

    return handle.handle();
  }
}
