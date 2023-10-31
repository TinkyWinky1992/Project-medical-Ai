import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async getUser():Promise<String>{

        return "hello world"
    }
}
