import {CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { jwtConstants } from './Constants';
  import {jwtDecode} from 'jwt-decode';
   
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
      //checking if the expire time not expired and if the token is valid
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authorization'];
        console.log(token);

        const decoded = jwtDecode(token);
        console.log(decoded);
        const currentTime =new Date();
        
        if ((!token) || (decoded.exp * 1000 <= currentTime.getTime()) ) {
          throw new UnauthorizedException();
        }

        try {
          const payload = await this.jwtService.verifyAsync(
            token,
            {
              secret: jwtConstants.secret
            }
          );
          // 💡 We're assigning the payload to the request object here
          // so that we can access it in our route handlers
          request['user'] = payload;
        } catch {
          throw new UnauthorizedException();
        }
        return true;
      }
  }