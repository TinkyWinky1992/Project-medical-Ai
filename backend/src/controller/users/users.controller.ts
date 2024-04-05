import { Controller, Get, Post, Param , Query, Body, UseGuards, Req, Delete, UseInterceptors, UploadedFile, Res, UploadedFiles} from '@nestjs/common';
import { AuthGuard } from '../../Auth/userAuth.guards';
import { AccountDto, AccoutWithNewDatails } from '../../Dto/AccountDto';
import { UserControllerService } from '../../service/user/UserController.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserControllerService) {}

 //creating user and post it to the database
  @Post('create')
  async CreateUser(@Body() AccountDto: AccountDto) {
    return await this.userService.createUser(AccountDto);

  }
  //get user from database by the email or username
  @Get('loginUser')
  async loginUserFromDataBase(@Query('email-or-username') email_username: string,@Query('password') pass: string){
    return await this.userService.loginUserTodataBase(email_username, pass);
  }

  @Get('getUser')
  async getUserFromDataBase(@Query('email-or-username') email_username: string){
    return await this.userService.getUser(email_username);
  }

   // The user payload is attached to the request object by AuthGuard
  // If it's present, the user is authenticated, so return true
  @Get('AuthUser')
  @UseGuards(AuthGuard)
  async isAuthUser(@Req() request: Request): Promise<boolean> {
    return request['user'];
    
  }

  @Post('update')
  async updateUserConfig(@Body() accout: AccoutWithNewDatails) {
    try{
      const savedUser = await this.userService.updateUser(accout);
    }catch(error){
      console.log(error)
    }
    
 
  }
}

