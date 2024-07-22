import { Module } from '@nestjs/common'
import { PostgresModule } from 'src/postgres/postgres.module'
import { UserService } from './user.service'

@Module({
    imports: [PostgresModule],
    controllers: [],
    providers: [UserService],
})

export class UserModule { }
