import { IsEmail, IsNotEmpty } from "class-validator";

export class Account {

    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}