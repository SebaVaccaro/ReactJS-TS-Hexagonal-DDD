import { User } from "./User";

export interface UserRepository{
    createUser(user:User): Promise<User>
    getUsers(): Promise<User[]>
    userLogin(username: string, password: string): Promise<User>
}