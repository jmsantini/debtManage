import { User } from "../entites/user";


export interface UserGateway {
    registerUser(user:User):Promise<void>;
    getUserByEmail(email: string): Promise<User | undefined>;
}