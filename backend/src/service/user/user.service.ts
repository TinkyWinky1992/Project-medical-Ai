import { Injectable } from '@nestjs/common';
import { Account } from '../../Dto/Account';
import { UserEntite } from '../../TypeOrm/entities/user';
import {InjectRepository } from '@nestjs/typeorm'
import {Repository} from 'typeorm';

@Injectable()
export class UserService {
    //get user repository from the database
    constructor(@InjectRepository(UserEntite) private user_repository: Repository<UserEntite>,) {

    }
    //get user from the data base
    async getUser(username: string):Promise<Account>{
        const user = await this.user_repository.findOne({ where: { username: username } });

        if (user) 
          return user;
        else 
          return null; // Return null when the user is not found
    }

    //creating user and put it in the user repository
    async createUser(account: Account): Promise<boolean> {
        const new_user_entite = this.user_repository.create({ ...account });
        
        try {
            await this.user_repository.save(new_user_entite);
            const isUserInsert = await this.getUser(account.username); // await the getUser method
    
            if (isUserInsert != null) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            // Handle any errors that might occur during save
            console.error('Error while saving user:', error);
            return false; // or throw an exception if needed
        }
    }
    
}
