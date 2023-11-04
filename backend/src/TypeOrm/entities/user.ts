import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "users"})
export class UserEntite {
    //numeric value that auto increments and auto generated
    @PrimaryGeneratedColumn({type: 'bigint'})//supporting bigger values
    id: number;

    @Column()
    username:string;
    
    @Column()
    email:string;

    @Column()
    password:string;


}
