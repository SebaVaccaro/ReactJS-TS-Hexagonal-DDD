import { useEffect, useState } from "react"
import { PublicationService } from "../../../modules/publication/application/PublictionService"
import { PublicationAxiosApi } from "../../../modules/publication/infrastructure/api/PublicationAxiosApi"
import { Publication } from "../../../modules/publication/domain/entity/Publication"

export const useGetPublications = () =>{
    const apiClient = PublicationAxiosApi()
    const publicationService = PublicationService(apiClient)
    const [publications, setPublications] = useState<Publication[] | null>(null)
    useEffect(()=>{
        const getPublications = async() =>{
            const res = await publicationService.getPublications()
            setPublications(res)
        }
        getPublications()
    },[])
    return{
        publications
    }
}   