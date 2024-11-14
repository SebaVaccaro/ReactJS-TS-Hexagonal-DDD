import { useUserStore } from "../../modules/user/infrastructure/userStore/userStore"
import { UserProfile } from "../components/user/UserProfile"

export const ProfilePage = () => {
    const {loggedData} = useUserStore()
    const user = loggedData.user
    return(
        <>
            <UserProfile user={user}/>
        </>
    )
}