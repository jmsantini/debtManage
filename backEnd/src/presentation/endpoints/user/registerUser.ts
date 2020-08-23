import { Request, Response } from 'express';
import { RegisterUserUC } from '../../../business/usecase/user/registerUserUC';
import { UserDb } from '../../../data/userDatabase';


export const RegisterUserEndpoint = async (req: Request, res: Response) => {
    try {
        const registerUserUC = new RegisterUserUC(new UserDb());
        const result = await registerUserUC.execute({
            email: req.body.email,
            password: req.body.password
        })



        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}