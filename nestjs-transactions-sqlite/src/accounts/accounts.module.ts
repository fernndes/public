import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './entities/account.entity';
import { AccountTypesEntity } from './entities/account-types.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity, AccountTypesEntity])
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
  exports: [AccountsService]
})
export class AccountsModule {}
