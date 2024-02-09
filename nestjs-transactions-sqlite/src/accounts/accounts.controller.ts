import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('api/v1/accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.accountsService.findOne(id);
  }

  @Post('/types')
  createAccountType(@Body() createAccountTypeDto: CreateAccountTypeDto) {
    return this.accountsService.createAccountType(createAccountTypeDto);
  }

  @Patch(':id') 
  updateAccount(
    @Param('id') id: number,
    @Body() updateAccountDto: UpdateAccountDto){
    return this.accountsService.update(id, updateAccountDto)
  }
}
