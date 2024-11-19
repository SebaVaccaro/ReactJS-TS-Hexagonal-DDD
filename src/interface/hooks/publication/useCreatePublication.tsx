import { SubmitHandler, useForm } from "react-hook-form"
import { FormCreatePublicationI } from "../../../modules/publication/domain/interface/FormCreatePublicationI"
import { PublicationAxiosApi } from "../../../modules/publication/infrastructure/api/PublicationAxiosApi"
import { PublicationService } from "../../../modules/publication/application/PublictionService"
import { useUserStore } from "../../../modules/user/infrastructure/userStore/userStore"

export const useCreatePublication = () =>{
    const api = PublicationAxiosApi()
    const publicationService = PublicationService(api)
    const {loggedData} = useUserStore()
    const{register, handleSubmit} = useForm<FormCreatePublicationI>()
    
    const submit: SubmitHandler<FormCreatePublicationI> = async (data) =>{
        if(loggedData.user){
            console.log(loggedData)
            const publication = {...data, userCreate: loggedData.user._id}
            await publicationService.createPublication(publication)
            return
        }
        console.log('no hay usuario')
    }
    
    const onSubmit = handleSubmit(submit)
    return {
        register,
        onSubmit
    }
}