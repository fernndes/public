import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { config } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config), 
    UsersModule, 
    TransactionsModule, 
    AccountsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
