import { SubmitHandler, useForm } from "react-hook-form"
import { IFormInputLogin } from "../../../modules/user/domain/IFormInputLogin"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/AxiosUserRepository"
import { createUserService } from "../../../modules/user/application/UserService"

export const useUserLogin = () =>{
    const repository = createAxiosUserRespository()
    const service = createUserService(repository)

    const { register, handleSubmit} = useForm<IFormInputLogin>()
    const onSubmit: SubmitHandler<IFormInputLogin> = async (data) =>{
        const response = await service.loginUser(data.email, data.password)
        console.log(response)
    }
    const onSubmitForm = handleSubmit(onSubmit)
    return{
        register,
        onSubmitForm
    }
}