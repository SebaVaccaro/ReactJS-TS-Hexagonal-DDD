import { useEffect, useState } from "react"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/api/AxiosUserRepository"
import { createUserService } from "../../../modules/user/application/UserService"
import { User } from "../../../modules/user/domain/User"

export const useGetUserById = (id:string) =>{
    const repository = createAxiosUserRespository()
    const service = createUserService(repository)
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