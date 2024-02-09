import { AccountEntity } from 'src/accounts/entities/account.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from 'typeorm'

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    document: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}