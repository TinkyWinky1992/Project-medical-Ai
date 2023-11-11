import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UserMiddleware } from '../../middleware/UserMiddleware/user.middleware';
import { UserLoggerMiddleware } from '../../middleware/UserMiddleware/user.logger.middleware';
import { UsersController } from '../../controller/users/users.controller';
import { UserService } from '../../service/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntite } from '../../TypeOrm/entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([ UserEntite ])],
  controllers: [UsersController],
  providers: [UserService ]
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('users/create');
    consumer.apply(UserLoggerMiddleware).forRoutes('users');
  }
}
