import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntite } from '../TypeOrm/entities/user';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.LOCAL_HOST,
      port: parseInt(process.env.PORT_DATABASE),
      username: process.env.USERNAME_DATABASE,
      password: process.env.PASSWORD_DATABASE,
      database: process.env.NAME_DATABASE,
      entities: [UserEntite],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
