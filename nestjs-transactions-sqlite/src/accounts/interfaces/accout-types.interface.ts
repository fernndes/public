import { AccountPermissions } from "./account-permissions.interface";

export interface AccountTypes {
    id: number;
    name: string;
    permissions: AccountPermissions
}