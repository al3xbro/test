import { Injectable } from '@nestjs/common'
import { PostgresService } from 'src/postgres/postgres.service'

@Injectable()
export class UserService {
    constructor(
        private readonly postgresService: PostgresService,
    ) { }

    async cacheUsers() {
        return await this.postgresService.getAllUsers()
    }
}
