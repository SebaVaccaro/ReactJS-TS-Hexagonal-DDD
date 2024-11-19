import React from "react";
import { User } from "../../../modules/user/domain/User";

export const UserSummaryProfile: React.FC<{user:User | null}> = ({user}) => {
    
    return (
        <>
            {
                user ?
                    <div className="user-profile">
                        <h3>{user?.username}</h3>
                        <h3>{user?.email}</h3>
                    </div>
                    :
                    <h3>not user</h3>
            }
        </>
    )
}