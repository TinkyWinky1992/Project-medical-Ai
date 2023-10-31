import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser(): Promise<String> {
    return await this.userService.getUser();
  }
}
