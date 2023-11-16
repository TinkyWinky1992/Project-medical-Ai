import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { UserEntite } from '../TypeOrm/entities/user';
import { UserControllerService } from '../service/user/UserController.service';

@Injectable()
export class AuthService{
    //private userControllerService: UserControllerService
    constructor(private jwtService: JwtService) {}

    
    async login(user:UserEntite ) {
        const payload= {sub: user.id, username: user.username}
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}   
