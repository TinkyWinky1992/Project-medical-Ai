import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/service/user/user.service';

@Injectable()
export class CheckUserExistenceMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { new_username, new_email } = req.body;

    // Check if username already exists
    const usernameExists = await this.userService.isusernameExist(new_username);
    if (usernameExists  ) {
        throw new HttpException('Username already exists.', HttpStatus.BAD_REQUEST)
    }

    // Check if email already exists
    const emailExists = await this.userService.isemailExist(new_email);
    if (emailExists) {
        throw new HttpException('Email already exists.', HttpStatus.BAD_REQUEST)
    }

    // If neither username nor email exists, proceed to the next middleware or controller
    next();
  }
}