import { AccountEntity } from 'src/accounts/entities/account.entity';
import { Column, PrimaryGeneratedColumn, Entity, JoinColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm'

@Entity()
export class TransactionEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    value: number;

    @ManyToOne(() => AccountEntity) @JoinColumn()
    sender: AccountEntity;

    @ManyToOne(() => AccountEntity) @JoinColumn()
    receiver: AccountEntity;
}