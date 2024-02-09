import {
    IsNotEmpty,
    IsNumber,
} from 'class-validator';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { UserEntity } from 'src/users/entities/user.entity';
  
export class CreateTransactionDto {

    @IsNumber()
    @IsNotEmpty()
    readonly value: number;
  
    @IsNotEmpty()
    readonly sender: AccountEntity;

    @IsNotEmpty()
    readonly receiver: AccountEntity;
}