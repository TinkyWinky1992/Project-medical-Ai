import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../../service/user/user.service';
import {  ShortAccountParam } from '../../types/AccountType';
import { AccountDto } from '../../Dto/AccountDto';

@Injectable()
export class UserLoginMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userInput: ShortAccountParam = req.body;
    console.log(userInput);
    //console.log(userInput.username_email);
    // Check if userInput is undefined
    if (!userInput) 
      throw new HttpException('Invalid data. User input is undefined.', HttpStatus.BAD_REQUEST);
    

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let user = new AccountDto();

    if (emailRegex.test(userInput.username_email)) 
      user = await this.userService.getUserByEmail(userInput.username_email);
    else 
      user = await this.userService.getUserByUsername(userInput.username_email);
    
    if (!user) 
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);

        // checking password length
    if (userInput.password.length <= 6) 
        throw new HttpException('Password needs to be above 6 letters.', HttpStatus.BAD_REQUEST);

    const isMatchPassword = await this.userService.comparePassword(userInput.password, user.password);
    if(!isMatchPassword) 
      throw new HttpException('Password incorrect. ', HttpStatus.BAD_REQUEST);
  


    next();
  }
}
