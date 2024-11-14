import { SubmitHandler, useForm } from "react-hook-form"
import { IFormInputLogin } from "../../../modules/user/domain/IFormInputLogin"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/api/AxiosUserRepository"
import { useUserStore } from "../../../modules/user/infrastructure/userStore/userStore"
import { UserService } from "../../../modules/user/application/UserService"

export const useUserLogin = () => {
    const repository = createAxiosUserRespository()
    const service = UserService(repository)
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