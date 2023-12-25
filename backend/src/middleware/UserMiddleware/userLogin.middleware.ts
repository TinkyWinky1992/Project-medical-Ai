/*
  this middleware checking in the loggin screen 
  if the data that user input it correct.
  
  it check if user input correct password
  and correct details.
  if they are incorrect the middleware will drop for user error.
*/
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../../service/user/user.service';
import { ShortAccountParam } from '../../types/AccountType';
import { AccountDto } from '../../Dto/AccountDto';

@Injectable()
export class UserLoginMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {

   const { 'email-or-username': emailOrUsername, password } = req.query;
   const userInput: ShortAccountParam = {
      username_email: emailOrUsername as string, 
      password: password as string };

    // Check if userInput is undefined
    if (!userInput)
      throw new HttpException(
        'Invalid data. User input is undefined.',
        HttpStatus.BAD_REQUEST,
      );
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; //create regex for  checking if input is email
    let user = new AccountDto();
    //checking if user exsist in the data base
    /*
      we checking first if the input user is email or username.
      then we checking the value in the data base if it exsist.
    */
    if (emailRegex.test(userInput.username_email))
      user = await this.userService.getUserByEmail(userInput.username_email);
    else
      user = await this.userService.getUserByUsername(userInput.username_email);

    if (!user) throw new HttpException('User not found.', HttpStatus.NOT_FOUND);


    if (userInput.password.length <= 6)
      throw new HttpException(
        'Password needs to be above 6 letters.',
        HttpStatus.BAD_REQUEST,
      );

    //checking the password if it correct.
    const isMatchPassword = await this.userService.comparePassword(
      userInput.password,
      user.password,
    );
    if (!isMatchPassword)
      throw new HttpException('Password incorrect. ', HttpStatus.BAD_REQUEST);

    next();
  }
}
