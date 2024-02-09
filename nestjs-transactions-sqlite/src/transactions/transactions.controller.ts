import { Controller, Post, Body, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { AccountsService } from 'src/accounts/accounts.service';

@Controller('api/v1/transactions')
export class TransactionsController {
    constructor(
        private readonly transactionsService: TransactionsService
        ) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createTransaction(
        @Body() createTransactionDto: CreateTransactionDto
    ) {
        return this.transactionsService.transfer(createTransactionDto)
    }

    @Get()
    async getAllTransactions() {
        return this.transactionsService.getAll()
    }
}
