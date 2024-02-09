import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { AccountsModule } from 'src/accounts/accounts.module';
import { AccountEntity } from 'src/accounts/entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, AccountEntity]),
    AccountsModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
