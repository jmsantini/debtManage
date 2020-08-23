import { Request, Response } from "express";
import { RegisterDebtUC } from "../../business/usecase/registerDebtUC"
import { DebtDB } from "../../data/debtDatabase"



export const RegisterDebtEndpoint = async(req: Request, res: Response) => {
    try{
        const registerDebtUC = new RegisterDebtUC(new DebtDB());
        const result = await registerDebtUC.execute({
            client_id: req.body.client_id,
            client_name: req.body.client_name,
            debt_reason: req.body.debt_reason,
            debt_date: req.body.debt_date,
            debt_value: req.body.debt_value,
        })

        res.status(200).send(result)
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}