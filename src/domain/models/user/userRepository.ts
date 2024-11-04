import { User } from "./User";

export interface IUserRepository{
    createUser(user: User): string
    saveUser(user: User): string
    deleteUser(id: string): string
    getUserById(id: string): User
    getUserByEmail(email: string): User
    getUsers(): User[]
}