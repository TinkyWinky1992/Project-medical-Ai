import { Controller, Get, Post, Param, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { Account } from '../../Dto/Account';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get(':username')
  async getUser(@Param('username') username:string): Promise<Account> {
    return await this.userService.getUser(username);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async CreateUser(@Body() account: Account) {
    await this.userService.createUser(account);

    return {};

  }
}
