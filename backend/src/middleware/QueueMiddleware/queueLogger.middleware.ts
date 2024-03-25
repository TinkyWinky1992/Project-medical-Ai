import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class QueueLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request IP: ${req.ip}`);


    next();
  }
}
