import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserLoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request IP: ${req.ip}`);
   // console.log(`Request Headers: ${JSON.stringify(req.headers)}`);

    // You can log more information as needed, such as request body, query parameters, etc.

    next();
  }
}
