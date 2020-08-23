import { DebtGateway } from "../gateways/debtGateway";


export class GetDebtClientsUC {
    constructor(
        private debtGateway: DebtGateway
    ) { }

    public async execute(): Promise<GetDebtClientsUCOutput> {

        let clients = await this.debtGateway.getDebtClients();
       
        if (!clients) {
            clients = []
        };

        return {
            clients: clients.map(client => {
                return {
                    client_id: client.getClient_Id(),
                    client_name: client.getClient_Name(),
                    debt_value: client.getDebt_Value()
                }
            })
        }

    }
}

export interface GetDebtClientsUCOutputClient {
    client_id:number;
    client_name: string;
    debt_value: number;
}

export interface GetDebtClientsUCOutput {
    clients: GetDebtClientsUCOutputClient[];
}