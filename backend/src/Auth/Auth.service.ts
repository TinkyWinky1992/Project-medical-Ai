import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { UserEntite } from '../TypeOrm/entities/user';
//import { UserControllerService } from '../service/user/UserController.service';

@Injectable()
export class AuthService{
    //private userControllerService: UserControllerService
    constructor(private jwtService: JwtService) {}

    async tokenValid(access_token: string) {
        try{
            const isValid = this.jwtService.verifyAsync(access_token);
            return isValid;
            
        }catch(error){
            console.log(error)
        }
        
    }
    async loginAuth(user:UserEntite ) {
        const payload= {sub: user.id, username: user.username}
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}   
