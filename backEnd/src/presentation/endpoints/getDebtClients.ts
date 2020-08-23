import { Request, Response } from 'express';
import { GetDebtClientsUC } from '../../business/usecase/getDebtClients';
import { DebtDB } from '../../data/debtDatabase';

export const GetDebtClientsEndpoint = async (req: Request, res: Response) => {
    try {
        const getDebtClientsUC = new GetDebtClientsUC(new DebtDB());

        const result = await getDebtClientsUC.execute()

        res.status(200).send (result) 
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}