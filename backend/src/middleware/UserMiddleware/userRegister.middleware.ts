/*
  the Register middlerware check for input user.
  if the input are not already in the database.

  checking if the passord is valid , need to be above 6 letters.
*/
import {  HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AccountParam  } from '../../types/AccountType';
import { UserService } from '../../service/user/user.service';


@Injectable()
export class UserRegisterMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService ) {
  }
  async use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    const userInput: AccountParam = req.body;
    // Check if email or username already exist in the database
    const emailExist = await this.userService.isemailExist(userInput.email);
    const usernameExist = await this.userService.isusernameExist(userInput.username);

    if (usernameExist) 
      throw new HttpException('Username is already in use.', HttpStatus.BAD_REQUEST)
      
    if(emailExist) 
      throw new HttpException('Email is already in use.', HttpStatus.BAD_REQUEST)
    
    //checking password above 6 letters
    if(userInput.password.length <= 6)
      throw new HttpException('Password need to be above 6 letters.', HttpStatus.BAD_REQUEST)

    next();
  }
}

