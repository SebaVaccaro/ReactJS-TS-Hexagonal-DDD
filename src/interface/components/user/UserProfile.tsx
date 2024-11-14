import React from "react"
import { User } from "../../../modules/user/domain/User"

export const UserProfile: React.FC<{ user: User | null}> = ({ user }) => {
    return (
        <div className="user-profile">
            {
                user ?
                    <>
                        <h3>{user.username}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.phonenumber}</h3>
                        <h3>{user._id}</h3>
                        <h3>{user.age}</h3>
                        <h3>{user.gender}</h3>
                    </> : 
                    <>
                        <h3 className="no-user">No user</h3>
                    </>
            }
        </div>
    )
}