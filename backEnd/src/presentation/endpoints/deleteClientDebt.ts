import { Request, Response } from "express"
import { DeleteClientDebtUC } from "../../business/usecase/deleteClientDebtUC"
import { DebtDB } from "../../data/debtDatabase"


export const DeleteClientDebtEndpoint = async (req: Request, res: Response) => {
    try{
        const deleteClientDebtUC = new DeleteClientDebtUC(new DebtDB());
        const result = await deleteClientDebtUC.execute({
            id: req.params.id
        })

        res.status(200).send(result)

    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}