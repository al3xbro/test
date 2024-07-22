import { BaseEntity, Column, Entity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
    @Column({ type: 'varchar', length: 255 })
    firstName: string;

    @Column({ type: 'varchar', length: 255 })
    lastName: string;
}