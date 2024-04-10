import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntite } from '../TypeOrm/entities/user';
import { ConfigModule } from '@nestjs/config';
import { QueueModule } from './Queue/queue.module';
import { QueueEntites } from 'src/TypeOrm/entities/Queue';


@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "admin",
      database: "maindatabase",
      entities: [UserEntite,QueueEntites],
      synchronize: true,
    }),
    UserModule,
    QueueModule,
  ],
})
export class AppModule {}