import { Controller, Get, Post , Query, Body, UseGuards, Req} from '@nestjs/common';
import { AuthGuard } from '../../Auth/userAuth.guards';
import { AccountDto } from '../../Dto/AccountDto';
import { UserControllerService } from '../../service/user/UserController.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserControllerService) {}

 
  @Post('create')
  async CreateUser(@Body() AccountDto: AccountDto) {
    return await this.userService.createUser(AccountDto);

  }
  @Get('getusers')
  async getUserFromDataBase(@Query('email-or-username') email_username: string,@Query('password') pass: string){
    return await this.userService.getUser(email_username, pass);
  }

  @Get('AuthUser')
  async isAuthUser(@Query('token') token:string)  {
    return await this.userService.checkUserAuth(token);
  }
  
/*
  @Get('is-authenticated')
  @UseGuards(AuthGuard)
  async isAuthenticated(@Body() AccountDto: AccountDto) {
    if(AccountDto == null)
      return { isAuthenticated: false };
    
    const isExists =  await this.userService.getUser(AccountDto.email, AccountDto.password);
    if(!isExists)
      return { isAuthenticated: false };

    return { isAuthenticated: true };
    
  }
*/
}
  /*
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);

  }
  */