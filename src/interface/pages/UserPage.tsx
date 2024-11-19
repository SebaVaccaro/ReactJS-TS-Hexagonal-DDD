import {  useNavigate, useParams } from "react-router-dom"
import { UserProfile } from "../components/user/UserProfile"
import { useGetUserById } from "../hooks/user/useGetUserByID"

export const UserPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    if(!id){
        navigate('/')
        return null
    }
    const { user } = useGetUserById(id)
    return(
        <UserProfile user={user}/>
    )
}