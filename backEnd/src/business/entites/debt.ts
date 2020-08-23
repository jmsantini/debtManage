export class Debt {
    constructor(
        private id: string,
        private client_id: number,
        private client_name: string,
        private debt_reason: string,
        private debt_date: Date,
        private debt_value: number
    ) { }

    public getId(): string {
        return this.id
    }

    public setId(id: string): void {
        this.id = id
    }

    public getClient_Id(): number {
        return this.client_id
    }

    public setClient_Id(client_id: number): void {
        this.client_id = client_id
    }

    public getClient_Name(): string{
        return this.client_name
    }

    public setClient_Name(client_name: string): void {
        this.client_name = client_name
    }

    public getDebt_Reason(): string {
        return this.debt_reason
    }

    public setDebt_Reason(debt_reason: string): void {
        this.debt_reason = debt_reason
    }

    public getDebt_Date(): Date {
        return this.debt_date
    }

    public setDebt_Date(debt_date: Date): void {
        this.debt_date = debt_date
    }

    public getDebt_Value(): number {
        return this.debt_value
    }

    public setDebt_Value(debt_value: number): void {
        this.debt_value = debt_value
    }


}


