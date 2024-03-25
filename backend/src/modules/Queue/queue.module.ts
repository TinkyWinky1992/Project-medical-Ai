import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueEntites } from 'src/TypeOrm/entities/Queue';
import { UserEntite } from 'src/TypeOrm/entities/user';
import { QueueController } from 'src/controller/queue/queue.controller';
import { QueueLoggerMiddleware } from 'src/middleware/QueueMiddleware/queueLogger.middleware';
import { QueueService } from 'src/service/queue/queue.service';
import { UserService } from 'src/service/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([QueueEntites,UserEntite]),
  ],
  controllers: [QueueController],
  providers: [QueueService, UserService],
})
export class QueueModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(QueueLoggerMiddleware).forRoutes('queue');
    
  }
}