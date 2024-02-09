import { Controller, Post, Body, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.usersService.create(createUserDto)
    }

    @Get()
    async getAll() {
        return this.usersService.getAll()
    }
}
