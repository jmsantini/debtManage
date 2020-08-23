import { Debt } from "../entites/debt"
import { ClientDebtList } from "../entites/clientDebtList";


export interface DebtGateway {
    registerDebt(debt: Debt): Promise<void>;
    getDebtById(id: string): Promise<Debt | undefined>;
    updateDebt(input: Partial<UpdateDebtData>): Promise<void>;
    getDebtClients(): Promise<ClientDebtList[] | undefined>;
    getDebtByClientId(client_id: number): Promise<Debt[] | undefined>;
    deleteClientDebt(id: string): Promise<void>;
}



export interface UpdateDebtData {
    id: string,
    client_id: number,
    client_name: string,
    debt_reason: string,
    debt_date: Date,
    debt_value: number
}
