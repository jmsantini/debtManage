import { DebtGateway } from "../gateways/debtGateway";


export class GetDebtByClientIdUC {
    constructor(private debtGateway: DebtGateway) {}

    public async execute(input: GetDebtClientUCInput): Promise<GetDebtClientUCOutput> {

        let clientDebts = await this.debtGateway.getDebtByClientId(input.client_id)

        if (!clientDebts) {
            clientDebts = []
        };

        return {
            clientDebts: clientDebts.map(debt => {
                return{
                    id: debt.getId(),
                    client_id: debt.getClient_Id(),
                    client_name: debt.getClient_Name(),
                    debt_reason: debt.getDebt_Reason(),
                    debt_date: debt.getDebt_Date(),
                    debt_value: debt.getDebt_Value()
                }
            })
        }

    }
}


interface GetDebtClientUCInput {
    client_id: number
}

interface GetDebtClientUCOutput {
    clientDebts: GetDebtByClientIdUCOutputDebt[]
}

export interface GetDebtByClientIdUCOutputDebt {
    id: string;
    client_id: number;
    client_name: string;
    debt_reason: string;
    debt_date: Date;
    debt_value: number;
}