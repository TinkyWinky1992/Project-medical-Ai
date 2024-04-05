import { IsEmail, IsNotEmpty} from "class-validator";

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

export class AccoutWithNewDatails{
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    new_email: string;

    @IsNotEmpty()
    new_username: string;
}
