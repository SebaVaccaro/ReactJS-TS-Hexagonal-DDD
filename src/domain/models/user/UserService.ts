import { User } from "./User";
import { IUserRepository } from "./userRepository";

export class UserService{
    constructor( private readonly userRepository: IUserRepository){}
    
    createUser(data:{username:string, email:string, password:string, phonenumber:string}){
        const user = new User(data.username, data.email, data.password, data.phonenumber)
        return this.userRepository.createUser(user) 
    }
    saveUser(user: User): string{
       return this.userRepository.saveUser(user)
    }
    deleteUser(id: string): string{
        return this.userRepository.deleteUser(id)
    }
    getUserById(id: string): User{
        return this.userRepository.getUserById(id)
    }
    getUserByEmail(email: string): User{
        return this.userRepository.getUserByEmail(email)
    }
    getUsers(): User[]{
        return this.userRepository.getUsers()
    }
}