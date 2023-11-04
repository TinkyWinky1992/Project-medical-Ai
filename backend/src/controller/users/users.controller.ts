import { Controller, Get, Post, Delete, Param, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { AccountDto } from '../../Dto/AccountDto';
import { AccountParam } from '../../types/AccountType';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get(':username')
  async getUser(@Param('username') username:string): Promise<AccountParam> {
    return await this.userService.getUser(username);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async CreateUser(@Body() AccountDto: AccountDto) {
    await this.userService.createUser(AccountDto);

  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);

  }
}
