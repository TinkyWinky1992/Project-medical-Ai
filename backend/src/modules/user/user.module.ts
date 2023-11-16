import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UserRegisterMiddleware } from '../../middleware/UserMiddleware/userRegister.middleware';
import { UserLoggerMiddleware } from '../../middleware/UserMiddleware/userLogger.middleware';
import { UserLoginMiddleware } from '../../middleware/UserMiddleware/userLogin.middleware';
import { UsersController } from '../../controller/users/users.controller';
import { UserService } from '../../service/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntite } from '../../TypeOrm/entities/user';
import { UserControllerService } from '../../service/user/UserController.service';
import { AuthService } from '../../Auth/Auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../Auth/Constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([ UserEntite ]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
  ],
  controllers: [UsersController],
  providers: [UserService, UserControllerService ,AuthService],
  exports:[AuthService]
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserRegisterMiddleware).forRoutes('users/create');
    consumer.apply(UserLoggerMiddleware).forRoutes('users');
    consumer.apply(UserLoginMiddleware).forRoutes('users/getuser');
    
  }
}
