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

   // The user payload is attached to the request object by AuthGuard
  // If it's present, the user is authenticated, so return true
  @Get('AuthUser')
  @UseGuards(AuthGuard)
  async isAuthUser(@Req() request: Request): Promise<boolean> {
    return !!request['user'];
    
  }
  

}
  /*
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);

  }
  */