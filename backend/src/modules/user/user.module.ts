import { Module } from '@nestjs/common';
import { UsersController } from '../../controller/users/users.controller';
import { UserService } from '../../service/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../TypeOrm/entities/user';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'admin',
    database:'usersDatabase',
    entities: [User],
    synchronize: true,
    dropSchema: true,//this option maybe helpful
  })],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
