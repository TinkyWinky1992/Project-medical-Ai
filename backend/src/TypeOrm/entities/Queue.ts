import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { UserEntite } from './user';

@Entity({name: "queue"})
export class QueueEntites {

    @PrimaryGeneratedColumn({type:'bigint'})
    id: number;

    @Column()
    level: number;
    
    @Column()
    problem:string;
    
    @Column()
    username: string

    @Column()
    email: string

    @ManyToOne(() => UserEntite, user => user.queues)
    user: UserEntite;
}