import {
    MaxLength,
    IsNotEmpty,
    IsString,
    IsEmail,
  } from 'class-validator';
  
  export class CreateUserDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly firstName: string;
  
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @MaxLength(50)
    readonly document: string;
  
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
  
    @IsString()
    @MaxLength(50)
    readonly password: string; 
}