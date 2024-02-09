import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}

    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto);
    }

    getAll() {
        return this.userRepository.find()
    }
}
