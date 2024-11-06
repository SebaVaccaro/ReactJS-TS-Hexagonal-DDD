import { useUserStore } from "../../../modules/user/infrastructure/userStore/userStore"

export const UserProfile = () =>{
    const loggedData = useUserStore(state => state.loggedData)
    const user = loggedData.user
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