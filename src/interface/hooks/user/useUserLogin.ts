import { SubmitHandler, useForm } from "react-hook-form"
import { IFormInputLogin } from "../../../modules/user/domain/IFormInputLogin"
import { createUserService } from "../../../modules/user/application/UserService"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/api/AxiosUserRepository"
import { useUserStore } from "../../../modules/user/infrastructure/userStore/userStore"

export const useUserLogin = () => {
    const repository = createAxiosUserRespository()
    const service = createUserService(repository)
    const loginUser = useUserStore(state => state.loginUser)
    const { register, handleSubmit } = useForm<IFormInputLogin>()
    
    const onSubmit: SubmitHandler<IFormInputLogin> = async (data) => {
        const response = await service.loginUser(data.email, data.password)
        console.log(response)
        loginUser(response)
    }
    
    const onSubmitForm = handleSubmit(onSubmit)
    
    return {
        register,
        onSubmitForm
    }
}