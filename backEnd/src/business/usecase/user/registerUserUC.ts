import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { UserGateway } from '../../gateways/userGateway';
import { User } from '../../entites/user';

export class RegisterUserUC {
    constructor(
        private userGateway: UserGateway
    ) { }

    public async execute(input: RegisterUserUCInput): Promise<RegisterUserUcOutput> {
        try {
            const userId = v4();

            if (input.password.length < 4) {
                throw new Error("Password most be more then 4 caracteres")
            } else {
                const encryPassword = await bcrypt.hash(input.password, 10)

                const newUser = new User(userId, input.email, encryPassword)

                await this.userGateway.registerUser(newUser)
                    return{
                        message: "New user registred"
                    }
            }

        } catch(err) {
            throw new Error(err.message)
        }
    };
};


export interface RegisterUserUCInput {
    email: string;
    password: string;
}

export interface RegisterUserUcOutput {
    message: string;
}