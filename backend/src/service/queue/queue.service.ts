import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { QueueEntites } from 'src/TypeOrm/entities/Queue';
import { ExtendQueueParam, QueueParam } from 'src/types/QueueType';
import { UserEntite } from 'src/TypeOrm/entities/user';

@Injectable()
export class QueueService {
  private DateHash: HashTable<Date> = {};

  constructor(
    @InjectRepository(QueueEntites)
    private queueRepository: Repository<QueueEntites>,
    @InjectRepository(UserEntite)
    private userRepository: Repository<UserEntite>
  ) {}

  async createQueue(QueueDetails: QueueParam): Promise<QueueEntites> {
    const user = await this.userRepository.findOneBy({ username: QueueDetails.username });
    const datetime: string = await this.pushToHash(user.id);
    const details: ExtendQueueParam = {
      problem: QueueDetails.problem,
      level: QueueDetails.level,
      username: QueueDetails.username,
      email: QueueDetails.email,
      Your_Appointment_Date: datetime 
    };
    console.log("details", details)
    const queue = this.queueRepository.create({ ...details, user });
    return await this.queueRepository.save(queue);
  }

  async findUserAppointment(username: string, email: string): Promise<any[]> { 
    const appointments = await this.queueRepository.find({
      where: {
        username: username,
        email: email
      }
    });
    return appointments;
  }

  async pushToHash(id: number): Promise<string> {
    const currentDate: Date = new Date();
    const formattedDate: string = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear() % 100}`;
    console.log(formattedDate);
    this.DateHash[id] = currentDate; // Storing Date object in DateHash
    return formattedDate;
  }
}
