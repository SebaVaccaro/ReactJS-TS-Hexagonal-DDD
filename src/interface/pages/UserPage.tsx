import {  useNavigate, useParams } from "react-router-dom"
import { UserProfile } from "../components/user/UserProfile"

export const UserPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    if(!id){navigate('/')
        return null
    }
    return(
        <UserProfile id={id}/>
    )
}