import { SubmitHandler, useForm } from "react-hook-form"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/AxiosUserRepository"
import { createUserService } from "../../../modules/user/application/UserService"
import { IFormInput } from "../../../modules/user/domain/IFormInput"

export const useUserRegistration = () =>{
    const repository = createAxiosUserRespository()
    const service = createUserService(repository)
    
    const{register, handleSubmit} = useForm<IFormInput>()
    
    const onSubmit: SubmitHandler<IFormInput> = async (data) =>{
        await service.createUser({...data, userId: "1234"})
        await service.getUsers()
    }
    const onSubmitForm = handleSubmit(onSubmit)
    
    return{
        register,
        onSubmitForm
    }
}