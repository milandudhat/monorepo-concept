import { IsEmail, IsNotEmpty } from "class-validator";


export class UsersDto {
    @IsNotEmpty()
     name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    age: string;


}