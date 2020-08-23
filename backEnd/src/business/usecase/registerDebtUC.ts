import { DebtGateway } from "../gateways/debtGateway";
import { v4 } from "uuid";
import { Debt } from "../entites/debt";



export class RegisterDebtUC {
    constructor(
        private debtGateway: DebtGateway
    ) { }

    public async execute(input: RegisterDebtUCInput): Promise<RegisterDebtUCOutput> {
       

        const id = v4();

        const debt = new Debt(
            id,
            input.client_id,
            input.client_name,
            input.debt_reason,
            input.debt_date,
            input.debt_value
        )

        await this.debtGateway.registerDebt(debt)

        return {
            message: "Debt registered successfully."
        }


    }

}

export interface RegisterDebtUCInput {
    client_id: number;
    client_name: string;
    debt_reason: string;
    debt_date: Date;
    debt_value: number;
}

export interface RegisterDebtUCOutput {
    message: string;
}