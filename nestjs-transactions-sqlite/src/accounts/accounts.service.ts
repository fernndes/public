import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from './entities/account.entity';
import { Repository } from 'typeorm';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';
import { AccountTypesEntity } from './entities/account-types.entity';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountEntity)
    private accountRepository: Repository<AccountEntity>,
    @InjectRepository(AccountTypesEntity)
    private accountTypesRepository: Repository<AccountTypesEntity>,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountRepository.save(createAccountDto);
  }

  private async getAccountInfo(userId: number) {
    return await this.accountRepository.createQueryBuilder("account")
    .leftJoinAndSelect("account.user", "user")
    .leftJoinAndSelect("account.accountType", "accountType")
    .where("user.id = :userId", { userId })
    .getOne()
}

  async findOne(id: number) {
    return await this.getAccountInfo(id)
  }

  createAccountType(createAccountType: CreateAccountTypeDto) {
    return this.accountTypesRepository.save(createAccountType);
  }

  async update(
    accountId: number,
    updateAccountDto: UpdateAccountDto,
  ) {
    const existingAccount = await this.accountRepository.createQueryBuilder()
    .update(AccountEntity)
    .set(updateAccountDto)
    .where("id = :id", { id: accountId })
    .execute()

    if (!existingAccount) {
      throw new Error(`Account #${accountId} not found`);
    }

    return existingAccount;
  }
}
