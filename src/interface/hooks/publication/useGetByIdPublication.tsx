import { useEffect, useState } from "react"
import { PublicationService } from "../../../modules/publication/application/PublictionService"
import { PublicationAxiosApi } from "../../../modules/publication/infrastructure/api/PublicationAxiosApi"
import { Publication } from "../../../modules/publication/domain/entity/Publication"

export const useGetByIdPublication = (id:string) =>{
    const api = PublicationAxiosApi()
    const service = PublicationService(api)
    const [publication, setPublication] = useState<Publication | null>(null)
    useEffect(()=>{
        const fetch = async () =>{
            try{
                const res = await service.getPublicationById({id})
                setPublication(res)
            }catch(err){
                console.log(err)
            }
        }
        fetch()
    },[])

    return{
        publication
    }
}