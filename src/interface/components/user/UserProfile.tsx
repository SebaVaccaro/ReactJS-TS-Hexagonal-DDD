import React from "react"
import { useGetUserById } from "../../hooks/user/useGetUserByID"

export const UserProfile: React.FC<{id: string}> = ({id}) =>{
    const { user } = useGetUserById(id)
    return(
        <>
            {   user?
                <>
                 <h3>{user.username}</h3>
                 <h3>{user.email}</h3>
                 <h3>{user.phonenumber}</h3>
                </>
                :
                <>
                    <h3>no user</h3>
                </>
            }
        </>
    )
}