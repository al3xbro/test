import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './postgres/entities/user.entity';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common'

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot(),
        ScheduleModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT!),
            database: process.env.POSTGRES_DATABASE,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASS,
            schema: 'public',
            synchronize: true, // TEMP: change later
            entities: [User]
        })
    ]
})

export class AppModule { }
