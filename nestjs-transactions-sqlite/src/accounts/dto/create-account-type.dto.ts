import {
    IsNotEmpty,
    IsNumber,
    IsString
  } from 'class-validator';
import { AccountPermissions } from '../interfaces/account-permissions.interface';
  
export class CreateAccountTypeDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;
  
    @IsString()
    @IsNotEmpty()
    readonly permissions: AccountPermissions;
}
