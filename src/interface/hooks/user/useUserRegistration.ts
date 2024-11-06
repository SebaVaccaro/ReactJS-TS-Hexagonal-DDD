import { SubmitHandler, useForm } from "react-hook-form"
import { createUserService } from "../../../modules/user/application/UserService"
import { IFormInput } from "../../../modules/user/domain/IFormInput"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/api/AxiosUserRepository"

export const useUserRegistration = () => {
    const repository = createAxiosUserRespository()
    const service = createUserService(repository)

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await service.createUser({ ...data, userId: "1234" })
    }
    const onSubmitForm = handleSubmit(onSubmit)

    return {
        onSubmitForm,
        register
    }
}