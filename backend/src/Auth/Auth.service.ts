import { Injectable,UnauthorizedException  } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { UserEntite } from '../TypeOrm/entities/user';
import { jwtConstants } from './Constants';

@Injectable()
export class AuthService{
    constructor(private jwtService: JwtService) {}


    
    async loginAuth(user:UserEntite ) {
        const payload= {sub: user.id, username: user.username}
        return {
            access_token: await this.jwtService.signAsync(payload,{ expiresIn: jwtConstants.expiresIn}),
        };
    }
}   
