import { BaseDB } from "./baseDatabase";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entites/user";


export class UserDb extends BaseDB implements UserGateway {
    private userTable = "user_code7";


    private mapDBUserToUser(input?: any): User | undefined {
        return (
            input && new User(
                input.id,
                input.email,
                input.password
            )
        )
    };

    public async registerUser(user: User): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.userTable} (id, email, password) VALUES (
                '${user.getId()}',
                '${user.getEmail()}',
                '${user.getPassword()}'
            )
        `)
    };


    public async getUserByEmail(email: string): Promise<User | undefined> {
        const user = await this.connection.raw(`
            SELECT * FROM ${this.userTable}
            WHERE email = '${email}'
        `);

        if(!user[0][0]) {
            return undefined
        }

        return this.mapDBUserToUser(user[0][0])
    };

    

}