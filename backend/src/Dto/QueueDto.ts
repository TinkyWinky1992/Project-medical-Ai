import {  IsNotEmpty } from "class-validator";

export class QueueDto{
    @IsNotEmpty()
    problem: string;

    @IsNotEmpty()
    level: number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    email: string

}