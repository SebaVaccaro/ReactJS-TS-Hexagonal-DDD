import { useEffect, useState } from "react"
import { UserService } from "../../modules/user/application/UserService"
import { createAxiosUserRespository } from "../../modules/user/infrastructure/api/AxiosUserRepository"
import { User } from "../../modules/user/domain/User"
import { UserSummaryProfile } from "../components/user/UserSummaryProfile"


export const HomePage = () => {
    const repository = createAxiosUserRespository()
    const service = UserService(repository)
    const [users, setUsers] = useState<User[] | null>(null)
    useEffect(()=>{
        const getUsers = async()=>{
            const res: User[] = await service.getUsers()
            console.log(res)
            setUsers(res)
        }
        getUsers()
    },[])
    
    return(
        <>
            {
                users? users.map(user=>(
                    <UserSummaryProfile user={user}/>
                )
                ):<h3>no hay usuarios</h3>
            }
        </>
    )
}