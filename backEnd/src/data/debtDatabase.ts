import { BaseDB } from "./baseDatabase";
import { DebtGateway, UpdateDebtData } from "../business/gateways/debtGateway";
import { Debt } from "../business/entites/debt";
import { ClientDebtList } from "../business/entites/clientDebtList";




export class DebtDB extends BaseDB implements DebtGateway {
    private debtTable = "debt";

    private mapDebtToDBDebt(input: any): Debt | undefined {
        return (
            new Debt(
                input.id,
                input.client_id,
                input.client_name,
                input.debt_reason,
                input.debt_date,
                input.debt_value
            )
        );
    };


    public async getDebtById(id: string): Promise<Debt | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.debtTable}
            WHERE id = '${id}'
        `)

        if (!result[0][0]) {
            return undefined;
        }

        return await this.mapDebtToDBDebt(result[0][0])

    }


    public async deleteClientDebt(id: string): Promise<void>{
        const result = await this.connection.raw(`
            DELETE FROM ${this.debtTable}
            WHERE id = '${id}';
        `)
    }


    public async getDebtByClientId(client_id: number): Promise<Debt[] | undefined> {
        const clientDebts = await this.connection.raw(`
            SELECT * FROM ${this.debtTable}
            WHERE client_id = '${client_id}'
        `)

        if (!clientDebts[0][0]) {
            return undefined;
        }

        return await clientDebts[0].map((clientDebts:any) => {
            return new Debt(
                clientDebts.id,
                clientDebts.client_id,
                clientDebts.client_name,
                clientDebts.debt_reason,
                clientDebts.debt_date,
                clientDebts.debt_value
            )
        })
    }




    public async registerDebt(debt: Debt): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.debtTable} (
                id,
                client_id,
                client_name,
                debt_reason,
                debt_date,
                debt_value
            ) VALUES(
                '${debt.getId()}',
                '${debt.getClient_Id()}',
                '${debt.getClient_Name()}',
                '${debt.getDebt_Reason()}',
                '${debt.getDebt_Date()}',
                '${debt.getDebt_Value()}'
            )
        `);
    }


    public async updateDebt(input: Partial<UpdateDebtData>) {
        await this.connection(this.debtTable).update(input).where({ id: input.id })
    }


    public async getDebtClients(): Promise<ClientDebtList[] | undefined> {
        const debtList = await this.connection.raw(`
        SELECT client_id, client_name, sum(debt_value) as debt_value
        from ${this.debtTable}
        group by client_id, client_name;
        `);

        if (!debtList[0][0]) {
            return undefined
        }

        return await debtList[0].map((debtlist: any) => {
            return new ClientDebtList(
                debtlist.client_id,
                debtlist.client_name,
                debtlist.debt_value
            );
        });
    };

}

