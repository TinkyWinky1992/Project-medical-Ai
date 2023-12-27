import { Injectable,UnauthorizedException  } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { UserEntite } from '../TypeOrm/entities/user';
//import { UserControllerService } from '../service/user/UserController.service';

@Injectable()
export class AuthService{
    //private userControllerService: UserControllerService
    constructor(private jwtService: JwtService) {}

    async tokenValid(access_token: string) {
        try {
            const isValid = this.jwtService.verify(access_token);
            console.log(isValid);
            return isValid;
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                // Token is expired
                throw new UnauthorizedException('Token has expired');
            } else {
                // Token is invalid for some other reason
                console.log(error);
                throw new UnauthorizedException('Invalid token');
            }
        }
    }
    
    async loginAuth(user:UserEntite ) {
        const payload= {sub: user.id, username: user.username}
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}   
