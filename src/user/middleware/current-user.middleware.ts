import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../user.service';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}
  async use(request: Request, response: Response, next: NextFunction) {
    const { userId } = request.session || {};

    if (userId) {
      const user = await this.userService.findOne(userId);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      request.currentUser = user;
    }

    next();
  }
}
