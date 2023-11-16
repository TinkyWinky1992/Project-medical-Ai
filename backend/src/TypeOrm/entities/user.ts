import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "users"})
export class UserEntite {
    //numeric value that auto increments and auto generated

    @PrimaryGeneratedColumn({type:'bigint'})
    id: number;

    @Column({ unique: true })
    username:string;
    
    @Column({ unique: true })
    email:string;

    @Column()
    password:string;



}
