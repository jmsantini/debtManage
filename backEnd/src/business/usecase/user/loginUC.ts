import { UserGateway } from "../../gateways/userGateway";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';


export class LoginUC {
    constructor(
        private userGateway: UserGateway
    ) { }


    public async excute(input: LoginUCInput): Promise<LoginUCOutput> {
        const user = await this.userGateway.getUserByEmail(input.email);
        const jwtSecretKey: string = process.env.SECRET || "";


        if (!user) {
            throw new Error("Email or Password incorrect")
        }

        const isPasswordCorrect = await bcrypt.compare(input.password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error("Email or Password incorrect")
        }

        const token = jwt.sign({id: user.getId(), email: user.getEmail() }, jwtSecretKey,{
            expiresIn: '12h'
        })

        return{
            message: "Successfully logged in",
            token: token
        }

    };
};


export interface LoginUCInput{
    email: string;
    password: string;
}


export interface LoginUCOutput{
    message: string;
    token: string;
}