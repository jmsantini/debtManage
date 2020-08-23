import { Request, Response } from 'express';
import { LoginUC } from '../../../business/usecase/user/loginUC';
import { UserDb } from '../../../data/userDatabase';


export const LoginEndpoint = async (req: Request, res: Response) => {
    try {
        const loginUC = new LoginUC(new UserDb());
        const token = await loginUC.excute({
            email: req.body.email,
            password: req.body.password
        })

        res.status(200).send(token)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
};