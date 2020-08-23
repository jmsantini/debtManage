import { Request, Response } from "express";
import { UpdateDebtUC } from "../../business/usecase/updateDebtUC";
import { DebtDB } from "../../data/debtDatabase";

export const UpdateDebtEndpoint = async (req: Request, res: Response) => {
    try{
        const updateDebtUC = new UpdateDebtUC(new DebtDB());
        const result = await updateDebtUC.execute({
            id: req.params.id,
            client_id: req.body.client_id,
            client_name: req.body.client_name,
            debt_reason: req.body.debt_reason,
            debt_date: req.body.debt_date,
            debt_value: req.body.debt_value
        })

        res.status(200).send(result)

    } catch (err){
        res.status(400).send({
            message: err.message
        })
    }
}