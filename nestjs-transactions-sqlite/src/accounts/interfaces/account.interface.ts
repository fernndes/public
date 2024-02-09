import { User } from "src/users/interfaces/user.interface";
import { AccountTypes } from "./accout-types.interface";

export interface Account {
    id: number;
    userId: User;
    balance: number;
    accountType: AccountTypes;
}