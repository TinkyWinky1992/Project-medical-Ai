import {  NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UserEntite } from '../../TypeOrm/entities/user';

export class UserMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    const userInput = req.body;
    const validator_errors = await this.validationUserInput(userInput)
    if(validator_errors.length > 0)
      res.status(400).json({ errors: validator_errors });
    else 
      next();
  }
  
  //check the input of the user if it valid
  async validationUserInput(userInput: UserEntite):Promise<string[]> {
    const user = plainToClass(UserEntite, userInput);
    const errors = await validate(user);
    if (errors.length > 0) {
      const validationErrors = errors.map(error => Object.values(error.constraints));
      return validationErrors.reduce((acc, val) => acc.concat(val), []);
    }
    return [];
  }
}

