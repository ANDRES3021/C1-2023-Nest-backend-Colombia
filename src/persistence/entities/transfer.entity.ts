import { v4 as uuid } from "uuid";
import {TransferModel } from "src/models";
import { AccountEntity } from "./account.entity";




export class TransferEntity implements TransferModel {
    id = uuid();
    outcome: AccountEntity;
    income: AccountEntity;
    amount: number;
    reason: string;
    dateTime: number | Date;
    deletedAt?: number | Date;

}