export class ClientDebtList {
    constructor(
        private client_id: number,
        private client_name: string,
        private debt_value: number
    ) { }

    public getClient_Id(): number {
        return this.client_id
    }

    public setClient_Id(client_id: number): void {
        this.client_id = client_id
    }

    public getClient_Name(): string {
        return this.client_name
    }

    public setClient_Name(client_name: string): void {
        this.client_name = client_name
    }

    public getDebt_Value(): number {
        return this.debt_value
    }

    public setDebt_Value(debt_value: number): void {
        this.debt_value = debt_value
    }




}