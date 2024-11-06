import { create } from "zustand";
import { UserStore } from "../../domain/interfaces/UserStore";
import { User } from "../../domain/User";

export const useUserStore = create<UserStore>((set)=>{
    const loggedData = {
        logged: false,
        user: null
    }
    const loginUser = (user: User) =>{
        set(()=> ({
            loggedData:{
                logged: true,
                user: user
            }
        }))
    }
    return{
        loggedData,
        loginUser
    }
})