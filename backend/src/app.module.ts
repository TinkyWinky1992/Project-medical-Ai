import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserMiddleware } from './middleware/UserMiddleware/user.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { UserEntite } from './TypeOrm/entities/user';
import { UserLoggerMiddleware } from './middleware/UserMiddleware/user.logger.middleware';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'usersdatabase',
      entities: [UserEntite],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
