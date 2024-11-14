import { useEffect, useState } from "react"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/api/AxiosUserRepository"
import { UserService } from "../../../modules/user/application/UserService"
import { User } from "../../../modules/user/domain/User"

export const useGetUserById = (id:string) =>{
    const repository = createAxiosUserRespository()
    const service = UserService(repository)
    const [user, setUser] = useState<User | null>(null)
    useEffect(()=>{
        const fetch = async () =>{
            try{   
                const getUser = await service.getUserById(id)
                setUser(getUser)
            }catch(error){
                console.log(error)
            }
        }
        fetch()
    },[])
    return{
        user
    }
}