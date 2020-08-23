import { DebtGateway } from "../gateways/debtGateway";


export class UpdateDebtUC {
    constructor(
        private debtGateway: DebtGateway
    ) { }

    public async execute(input: UpdateDebtUCInput): Promise<UpdateDebtUCOutput> {
        
        const debt = await this.debtGateway.getDebtById(input.id)

       
        if (!debt) {
            throw new Error("Debt not found")
        }

        await this.debtGateway.updateDebt(input)

        return {
            message: "Debt updated sucessfully."
        }

    }

}


export interface UpdateDebtUCInput {
    id: string;
    client_id: number;
    client_name: string,
    debt_reason: string;
    debt_date: Date;
    debt_value: number;
}

export interface UpdateDebtUCOutput {
    message: string;
}