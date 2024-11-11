import { User } from "./User";

export interface UserRepository{
    createUser(user:User): Promise<User>
    getUserById(id: string): Promise<User>
    getUsers(): Promise<User[]>
    userLogin(email: string, password: string): Promise<User>
}