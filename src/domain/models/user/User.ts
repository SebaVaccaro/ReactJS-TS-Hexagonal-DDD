export class User{
    username: string
    email: string
    password: string
    phonenumber: string
    constructor(username: string, email: string, password: string, phonenumber: string){
        this.username = username
        this.email = email
        this. password = password
        this.phonenumber = phonenumber
    }
    setPassword(password: string): void{
        this.password = password
    }
    setPhonenumber(phonenumber: string): void{
        this.phonenumber = phonenumber
    }
    setEmail(email: string): void{
        this.email = email
    }
}