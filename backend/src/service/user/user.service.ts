import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserEntite } from '../../TypeOrm/entities/user';
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
    return !!user;
  }

  async comparePassword(password: string, incrypt_password: string): Promise<boolean> {

    const isMatch_password = await bcrypt.compare(password, incrypt_password);
    return !!isMatch_password
  }

  
  async getUserByEmail(email: string): Promise<AccountParam> {
    const user = await this.user_repository.findOneBy({ email: email });
    return user;

  }

  async getUserByUsername(username: string): Promise<AccountParam> {
    const user = await this.user_repository.findOneBy({ username: username });
    return user;
  }


}
