import { Module } from '@nestjs/common'
import { PostgresService } from 'src/postgres/postgres.service'
import { PostgresModule } from 'src/postgres/postgres.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/postgres/entities/user.entity'
import { UserService } from './user.service'

@Module({
    imports: [PostgresModule, TypeOrmModule.forFeature([User])],
    controllers: [],
    providers: [UserService, PostgresService],
})

export class UserModule { }
