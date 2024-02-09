import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './entities/transaction.entity';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { AccountTypesEntity } from 'src/accounts/entities/account-types.entity';
import { AccountsModule } from 'src/accounts/accounts.module';
import { UserEntity } from 'src/users/entities/user.entity';
import { AccountsService } from 'src/accounts/accounts.service';

@Module({
  imports: [
    AccountsModule,
    TypeOrmModule.forFeature([TransactionEntity, AccountEntity, AccountTypesEntity, UserEntity])
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
