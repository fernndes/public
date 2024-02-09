import {
    IsNotEmpty,
    IsNumber
  } from 'class-validator';
import { UserEntity } from 'src/users/entities/user.entity';
import { AccountTypesEntity } from '../entities/account-types.entity';
  
  export class CreateAccountDto {

    @IsNumber()
    @IsNotEmpty()
    readonly user: UserEntity;
  
    @IsNumber()
    @IsNotEmpty()
    readonly balance: number;

    @IsNumber()
    @IsNotEmpty()
    readonly accountType: AccountTypesEntity;
}
