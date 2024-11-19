import { Link, useNavigate } from "react-router-dom"
import { useUserStore } from "../../../modules/user/infrastructure/userStore/userStore"
import { UserSummaryProfile } from "./UserSummaryProfile"

export const UserMenu = () =>{
    const { loggedData, logOut} = useUserStore()
    const user = loggedData.user
    
    const navigate = useNavigate()
    const toProfile = () =>{
        navigate('/user/profile')
    }
    const toLogOut = () =>{
        logOut()
    }

    return (
        <div className="user-menu">
            <div onClick={toProfile} className="user-summary">
                <UserSummaryProfile user={user} />
            </div>
            <div className="user-options">
                {
                    user ? (
                        <div onClick={toLogOut}>
                            <h3>Log Out</h3>
                        </div>
                    ) : (
                        <>
                            <div className="login">
                                <Link to='/auth/login'>login</Link>
                            </div>
                            <div className="register">
                                <Link to='/user/register'>register</Link>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}