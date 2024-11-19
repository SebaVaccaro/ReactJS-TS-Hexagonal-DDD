import { User } from "../User"

export interface UserStore{
    loggedData: {
        logged: boolean,
        user: User | null
    }
    loginUser(user: User): void
    logOut():void
}