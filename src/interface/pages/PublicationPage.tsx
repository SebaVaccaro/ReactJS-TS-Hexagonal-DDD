import { useNavigate, useParams } from "react-router-dom"
import { PublicationComponent } from "../components/publication/PublicationComponent"
import { useGetByIdPublication } from "../hooks/publication/useGetByIdPublication"

export const PublicationPage = () =>{
    const navigate = useNavigate()
    const {id} = useParams()
    if(!id){
        navigate('/')
        return null
    }
    const { publication } = useGetByIdPublication(id)
    return(
        <PublicationComponent publication={publication}/>
    )
}