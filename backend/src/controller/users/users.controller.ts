import { Controller, Get, Post, Delete, Param, Query, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { AccountDto } from '../../Dto/AccountDto';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}


  @Get('email-exists')
  async emailExists(@Query('email') email: string): Promise<boolean> {
    return this.userService.isemailExist(email);
  }

  @Get('username-exists')
  async usernameExists(@Query('username') username: string): Promise<boolean> {
    return this.userService.isusernameExist(username);
  }

  @Post('create')
// @UsePipes(new ValidationPipe())
  async CreateUser(@Body() AccountDto: AccountDto) {
    await this.userService.createUser(AccountDto);

  }

  @Get('getuser')
  async getUser(@Query("email_or_password")email_or_username: string,@Query('password') password: string) {
   return await this.userService.getUser(email_or_username, password);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);

  }
}
