export class User {
    constructor(
        private id: string,
        private email: string,
        private password: string
    ) { }


    public getId(): string {
        return this.id;
     }
  
     public setId(id: string): void {
        this.id = id;
     }
  
     public getEmail(): string {
        return this.email;
     }
  
     public setEmail(email: string): void {
        this.email = email;
     }
  
     public getPassword(): string {
        return this.password;
     }
  
     public setPassword(password: string): void {
        this.password = password;
     }



}