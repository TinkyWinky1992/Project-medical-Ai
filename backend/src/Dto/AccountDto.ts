import { IsEmail, IsNotEmpty } from "class-validator";

export class AccountDto {

    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}