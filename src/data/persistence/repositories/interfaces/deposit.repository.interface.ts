import { DepositEntity } from "../../entities/deposite.entity";
import { BaseRepositoryInterface } from "../base/base-repository.interface";

 export interface DepositRepositoryInterface extends BaseRepositoryInterface<DepositEntity> {
    findByAccountId(accountId: string): DepositEntity[];
    findByDataRange(dateInit: Date | number,dateEnd: Date | number,): DepositEntity[];
 }