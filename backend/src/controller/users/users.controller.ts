import { Controller, Get, Post, Delete, Param, Query, Body, UseGuards} from '@nestjs/common';
import { AuthGuard } from '../../Auth/userAuth.guards';
import { AccountDto } from '../../Dto/AccountDto';
import { UserControllerService } from '../../service/user/UserController.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserControllerService) {}

 
  @Post('create')
// @UsePipes(new ValidationPipe())
  async CreateUser(@Body() AccountDto: AccountDto) {
    return await this.userService.createUser(AccountDto);

  }
  @Get('getusers')
  async test(@Query('email-or-username') email_username: string,@Query('password') pass: string){
    return await this.userService.getUser(email_username, pass);
  }
  

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);

  }
}
