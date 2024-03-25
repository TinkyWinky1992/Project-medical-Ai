import { Controller, Get, Post, Param , Query, Body, UseGuards, Req, Delete} from '@nestjs/common';
import { QueueDto } from 'src/Dto/QueueDto';
import { QueueService } from 'src/service/queue/queue.service';

@Controller('queue')
export class QueueController {
  constructor(private queueService: QueueService) {}


  @Post('create')
  async CreateQueue(@Body() queueDto: QueueDto) {
    console.log(queueDto);
    return await this.queueService.createQueue(queueDto);
  }
}