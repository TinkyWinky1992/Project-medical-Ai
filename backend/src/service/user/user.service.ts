import { Injectable } from '@nestjs/common';
import { UserEntite } from '../../TypeOrm/entities/user';
import { AccountDto } from '../../Dto/AccountDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountParam } from '../../types/AccountType';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  //get user repository from the database
  constructor(
    @InjectRepository(UserEntite)
    private user_repository: Repository<UserEntite>,
  ) {}

  async isemailExist(email: string): Promise<boolean> {
    const user = await this.user_repository.findOneBy({ email: email });
    return !!user;
  }

  async isusernameExist(username: string): Promise<boolean> {
    const user = await this.user_repository.findOneBy({ username: username });
    console.log(user);
    return !!user;
  }

  //creating user and put it in the user repository
  async createUser(accountDetails: AccountParam) {
    const saltOrRounds = await bcrypt.genSalt(); // the cost factor (the amount of time )for calculating the hash, the higher the number the more complicated the hash be
    accountDetails.password = await bcrypt.hash(
      accountDetails.password,
      saltOrRounds,
    );

    const new_user_entite: any = this.user_repository.create({...accountDetails});
    return this.user_repository.save(new_user_entite);
  }

  async getUser(email_or_username: string,password: string): Promise<AccountParam | string> {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let user = new AccountDto();
    //check if the user input email or username, then search in database if they are exist.
    if (emailRegex.test(email_or_username))
      user = await this.user_repository.findOne({ where: { email: email_or_username },});
    else
      user = await this.user_repository.findOne({ where: { username: email_or_username },});

    if (user == null) 
      return "User doesn't exist";
   
    const isMatch_password = await bcrypt.compare(password, user.password);
    if (isMatch_password) 
      return user;
    else 
      return 'Incorrect Password';
    
  }

  //delete user from database
  async deleteUser(id: number) {
    const user = await this.user_repository.find({ where: { id: id } });

    if (user[0] != null) return await this.user_repository.remove(user);
    else {
      console.log('user empty');
      return {};
    }
  }
}
