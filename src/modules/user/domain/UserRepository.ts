import { User } from "./User";
import { UserCreate } from "./UserCreate";

export interface UserRepository{
    createUser(user:UserCreate): Promise<User>
    getUserById(id: string): Promise<User>
    getUsers(): Promise<User[]>
    userLogin(email: string, password: string): Promise<User>
}