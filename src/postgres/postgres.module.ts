import { Module } from '@nestjs/common'
import { PostgresService } from './postgres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [PostgresService],
    exports: [PostgresService]
})

export class PostgresModule { }
