import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'
import { AccountPermissions } from '../interfaces/account-permissions.interface';

@Entity()
export class AccountTypesEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    permissions: AccountPermissions
}
