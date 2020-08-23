import { DebtGateway } from "../gateways/debtGateway";


export class DeleteClientDebtUC {
    constructor(
        private debtGateway: DebtGateway
    ) { }

    public async execute(input: DeleteClientDebtUCInput): Promise<DeleteClientUCOutput>{

        const clientDebt = await this.debtGateway.getDebtById(input.id)

        if(!clientDebt){
            throw new Error("Debt not found")
        }

        await this.debtGateway.deleteClientDebt(input.id)

        return{
            message: "Deleted sucessfully"
        }

    }

}


export interface DeleteClientDebtUCInput{
    id:string;
}

export interface DeleteClientUCOutput{
    message: string;
}