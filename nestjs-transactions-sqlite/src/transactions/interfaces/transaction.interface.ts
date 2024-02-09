import { AccountTypes } from "src/accounts/interfaces/accout-types.interface";
import { User } from "src/users/interfaces/user.interface";

export interface Transaction {
    readonly id: number;
    readonly value: number;
    readonly receiver: string;
    readonly sender: string;
}

export interface GetAccountInfoResponse {
  readonly id: number;
  readonly balance: number;
  readonly userId: User;
  readonly accountType: AccountTypes;
}
  