import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { QueueEntites } from 'src/TypeOrm/entities/Queue';
import { ExtendQueueParam, QueueParam } from 'src/types/QueueType';
import { UserEntite } from 'src/TypeOrm/entities/user';
import { PriorityQueue } from './Priority';




@Injectable()
export class QueueService {

  private listQueue = []
  private priorityQueue: PriorityQueue<QueueParam>;

  constructor(
    @InjectRepository(QueueEntites)
    private queueRepository: Repository<QueueEntites>,
    @InjectRepository(UserEntite)
    private userRepository: Repository<UserEntite>
  ) {
    this.priorityQueue = new  PriorityQueue<QueueParam>();
    this.initQueue();

  }
  async initQueue(){
    try{
      const count = await this.queueRepository.count();
      if(count != 0 ){
        const entities = await this.queueRepository.find();
        this.priorityQueue.insertList(entities)
      }
    }catch(error){
      console.error('Error initializing priority queue:', error);
    }

  }

  async createQueue(QueueDetails: QueueParam): Promise<String> {
    try{
      this.priorityQueue.insert(QueueDetails, +QueueDetails.level);
      this.assignDates()
      await this.queueRepository.clear();

        for (const queueItem of this.listQueue) {
          const user = await this.userRepository.findOneBy({ id: queueItem.id });
          console.log(queueItem.Your_Appointment_Date)
          const queue = this.queueRepository.create({username: queueItem.username,
                                                     email: queueItem.email,
                                                     level: queueItem.level,
                                                     problem: queueItem.problem,
                                                     Your_Appointment_Date: queueItem.Your_Appointment_Date,
                                                     user});
          await this.queueRepository.save(queue);
        }

      
      // Clear listQueue for the next assignment
    this.listQueue = [];
    return "Work";
      
    }catch(error){
      console.log(error)
      return "Didn't work"
    }

  }

  async findUserAppointment(id: number): Promise<any[]> {
    console.log(id);
    const appointments = await this.queueRepository.find({
      where:{
        user:{
          id: id
        }
      }
    })
    
    console.log(appointments);
    return appointments;
}


  async deleteQueue(id: number) {
    try {
      await this.queueRepository.delete(id);
    } catch (error) {
      console.error(`Error deleting queue with ID ${id}:`, error);
      throw new Error(`Failed to delete queue with ID ${id}`);
    }
  }

  async assignDates(){
    const currentDate: Date = new Date();
    let max_day = 0
    let max_month = 1;
    let year = currentDate.getFullYear() % 100;
    const temp_array = this.priorityQueue.getData()
    for(let i = 0; i < temp_array.length; i++){
      let day = currentDate.getDate() + max_day;
      if(day > 31)
      {
        max_month++
        day = 1;
        max_day = 0;
      }
      let month = currentDate.getMonth() + max_month
      if(month > 12 ){
        year++;
        month = 1
        max_month = 1;
      }
      
      const formattedDate: string = `${day}/${month}/${currentDate.getFullYear() % 100}`;
      console.log(formattedDate, temp_array[i])
      max_day++;

      const user: QueueParam = temp_array[i].data;
      let userAssinToDate: ExtendQueueParam = {
        problem: user.problem,
        level: user.level,
        username: user.username,
        email: user.email,
        Your_Appointment_Date: formattedDate,
        id: user.id

      };

      this.listQueue.push(userAssinToDate)


    }
    
  }


}
