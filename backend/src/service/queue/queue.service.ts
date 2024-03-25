import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { QueueEntites } from 'src/TypeOrm/entities/Queue';
import { QueueParam } from 'src/types/QueueType';
import { UserEntite } from 'src/TypeOrm/entities/user';

@Injectable()
export class QueueService {
  constructor(
    @InjectRepository(QueueEntites)
    private queueRepository: Repository<QueueEntites>,
    @InjectRepository(UserEntite)
    private userRepository: Repository<UserEntite>
  ) {}


    async createQueue(QueueDetails: QueueParam): Promise<QueueEntites> {
      const user = await this.userRepository.findOneBy({ username: QueueDetails.username })
      const queue = this.queueRepository.create({ ...QueueDetails, user });
      return await this.queueRepository.save(queue);
    }
}