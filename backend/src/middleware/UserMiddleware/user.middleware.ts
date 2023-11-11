import {  HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AccountParam  } from '../../types/AccountType';
import { UserService } from '../../service/user/user.service';


@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService ) {
  }
  async use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    const userInput: AccountParam = req.body;
    // Check if email or username already exist in the database
    const emailExist = await this.userService.isemailExist(userInput.email);
   // console.log("isE " + emailExist);
    const usernameExist = await this.userService.isusernameExist(userInput.username);
   // console.log("isU " + usernameExist);
    if (usernameExist) {
      throw new HttpException('Username is already in use.', HttpStatus.BAD_REQUEST)
      // res.status(400).json({ errors: ['Email or username is already in use.'] });
    }
    if(emailExist) {
      throw new HttpException('Email is already in use.', HttpStatus.BAD_REQUEST)
    }

    next();
  }
}

