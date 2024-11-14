import { SubmitHandler, useForm } from "react-hook-form"
import { IFormInput } from "../../../modules/user/domain/IFormInput"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/api/AxiosUserRepository"
import { UserService } from "../../../modules/user/application/UserService"

export const useUserRegistration = () => {
    const repository = createAxiosUserRespository()
    const service = UserService(repository)

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await service.createUser(data)
    }
    const onSubmitForm = handleSubmit(onSubmit)

    return {
        onSubmitForm,
        register
    }
}