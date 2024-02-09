import { UserEntity } from 'src/users/entities/user.entity';

import { PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { AccountTypesEntity } from './account-types.entity';

@Entity()
export class AccountEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne(() => UserEntity, user => user.id) @JoinColumn()
    user: UserEntity;

    @Column()
    balance: number;

    @ManyToOne(() => AccountTypesEntity) @JoinColumn()
    accountType: AccountTypesEntity;

    @Column({ nullable: true })
    userId: number;

    @Column({ nullable: true })
    accountTypeId: number;
}
