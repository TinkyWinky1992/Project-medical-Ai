import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntite } from './user'; // Correct import path

@Entity({ name: "queue" })
export class QueueEntites {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    level: number;
    
    @Column()
    problem: string;
    
    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    Your_Appointment_Date: string;

    @ManyToOne(() => UserEntite, user => user.queues)
    user: UserEntite;
}