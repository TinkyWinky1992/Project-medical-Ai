import { IsEmail, IsNotEmpty, isNotEmpty } from "class-validator";

export class AccountDto {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}

export class ShortAccountDto {

    @IsNotEmpty()
    username_email: string;

    @IsNotEmpty()
    password: string;
}