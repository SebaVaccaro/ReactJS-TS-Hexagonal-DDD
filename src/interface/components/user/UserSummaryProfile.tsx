import React from "react";
import { User } from "../../../modules/user/domain/User";
import { useNavigate } from "react-router-dom";

export const UserSummaryProfile: React.FC<{ user: User | null }> = ({ user }) => {
    const navigate = useNavigate()
    const toProfile = () =>{
        navigate(`/user/${user?._id}`)
    }
    return (
        <>
            {
                user ?
                    <div className="user-profile"
                        onClick={toProfile}
                    >
                        <h3>{user?.username}</h3>
                        <h3>{user?.email}</h3>
                    </div>
                    :
                    <h3>not user</h3>
            }
        </>
    )
}