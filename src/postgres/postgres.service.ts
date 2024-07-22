import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class PostgresService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    async getAllUsers() {
        return this.userRepository.find()
    }
}
