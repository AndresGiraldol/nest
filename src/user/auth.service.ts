import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UserService } from './user.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signup(email: string, password: string) {
    const users = await this.usersService.find(email);

    // Check if email is in use
    if (users.length) {
      throw new BadRequestException('User already exists');
    }

    // Generate a salt
    const salt = randomBytes(8).toString('hex');

    // Hash the password and salt together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // Join salt and hash
    const result = salt + '.' + hash.toString('hex');

    // Create user in DB
    const user = await this.usersService.create(email, result);

    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [salt, storageHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (hash.toString('hex') === storageHash) {
      return user;
    }

    throw new BadRequestException('bad password');
  }
}
