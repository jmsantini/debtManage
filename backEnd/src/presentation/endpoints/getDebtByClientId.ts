import { Request, Response } from 'express';
import { GetDebtByClientIdUC } from '../../business/usecase/getDebtByClientIdUC';
import { DebtDB } from '../../data/debtDatabase';

export const GetDebtByClientIdEndpoint = async (req: Request, res: Response) => {
    try {
        const getDebtByClientIdUC = new GetDebtByClientIdUC(new DebtDB());

        const result = await getDebtByClientIdUC.execute({
            client_id: Number(req.params.client_id) 
        })

        res.status(200).send( result )
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}