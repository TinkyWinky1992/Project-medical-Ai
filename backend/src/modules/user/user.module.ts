import { Module, MiddlewareConsumer, RequestMethod, NestModule } from '@nestjs/common';
import { UsersController } from '../../controller/users/users.controller';
import { UserService } from '../../service/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntite } from '../../TypeOrm/entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([ UserEntite ])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {

}
