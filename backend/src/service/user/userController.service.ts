import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserEntite } from '../../TypeOrm/entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountParam } from '../../types/AccountType';
import * as bcrypt from 'bcrypt';
import { AuthService } from '../../Auth/Auth.service';


@Injectable()
export class UserControllerService {
  //get user repository from the database
  constructor(
    @InjectRepository(UserEntite)
    private user_repository: Repository<UserEntite>, private AuthUser: AuthService
  ) {}

  //creating user and put it in the user repository
  async createUser(accountDetails: AccountParam) {
    const saltOrRounds = await bcrypt.genSalt(); // the cost factor (the amount of time )for calculating the hash, the higher the number the more complicated the hash be
    accountDetails.password = await bcrypt.hash(
      accountDetails.password,
      saltOrRounds,
    );
    
    const new_user_entite: UserEntite = this.user_repository.create({...accountDetails});
    const token = await this.AuthUser.loginAuth(new_user_entite)

    if (token && token.access_token) 
      return this.user_repository.save(new_user_entite);
    else 
      throw new Error('Authentication failed');
    
  }

  async getUser(email_or_username: string, password:string): Promise<{accsesToken: string}> {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let user = new UserEntite();
    
    if (emailRegex.test(email_or_username)) 
    user = await this.user_repository.findOne({ where: { email: email_or_username } });
  
  else 
    user = await this.user_repository.findOne({ where: { username: email_or_username } });


    const token = await this.AuthUser.loginAuth(user);

    if (token && token.access_token) 
      return {accsesToken: token.access_token}
    else 
      throw new Error('Authentication failed');

  }
  async checkUserAuth(accessToken: string) {
    try{
      const isValidToken = await this.AuthUser.tokenValid(accessToken);
      console.log(isValidToken);
     // console.log("checking" + isValidToken);
     return isValidToken;
    }catch(error)
    {
      console.log(error);
    }

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




/*
  //------------------------------------------------------------checking usesr details..

  
    if (!user) 
    throw new HttpException('User not found.', HttpStatus.NOT_FOUND);

  // checking password length
  if (password.length <= 6) 
    throw new HttpException('Password needs to be above 6 letters.', HttpStatus.BAD_REQUEST);

  const isMatchPassword = await bcrypt.compare(password, user.password);
  if (!isMatchPassword) 
    throw new HttpException('Password incorrect.', HttpStatus.BAD_REQUEST);
  //------------------------------------------------------------

*/