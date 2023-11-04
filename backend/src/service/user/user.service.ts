import { Injectable } from '@nestjs/common';
import { AccountDto } from '../../Dto/AccountDto';
import { UserEntite } from '../../TypeOrm/entities/user';
import {InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { AccountParam } from '../../types/AccountType';

@Injectable()
export class UserService {
    //get user repository from the database
    constructor(@InjectRepository(UserEntite) private user_repository: Repository<UserEntite>,) {

    }
    //get user from the data base
    async getUser(username: string):Promise<AccountDto>{
        const user = await this.user_repository.findOne({ where: { username: username } });

        if (user) 
          return user;
        else 
          return null; // Return null when the user is not found
    }

    //creating user and put it in the user repository
    async createUser(accountDetails: AccountParam) {
        const new_user_entite: any = this.user_repository.create({ ...accountDetails });
        return this.user_repository.save(new_user_entite);
    }

    //delete user from database
    async deleteUser(id: number) {
      const user = await this.user_repository.find({where:{id: id}})

      if(user[0] != null) 
        return await this.user_repository.remove(user);
      else 
      {
        console.log("user empty")
        return {}
      }
        
    }
    
}
