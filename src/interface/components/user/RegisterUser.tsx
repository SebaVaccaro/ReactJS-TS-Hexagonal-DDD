import { SubmitHandler, useForm } from "react-hook-form"
import { createAxiosUserRespository } from "../../../modules/user/infrastructure/AxiosUserRepository"
import { createUserService } from "../../../modules/user/application/UserService"
import { IFormInput } from "../../../modules/user/domain/IFormInput"

export const RegisterUser = () =>{
    const repository = createAxiosUserRespository()
    const service = createUserService(repository)
    const { register, handleSubmit} = useForm<IFormInput>()
    const onSubmitForm: SubmitHandler<IFormInput> = async (data) =>{
        await service.createUser({...data, userId: "1234"})
        await service.getUsers()
    }
    return(
        <>
            <h5>register</h5>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input type="text" placeholder="username" {...register("username")}/>
                <input type="text" placeholder="email" {...register("email")}/>
                <input type="password" placeholder="password" {...register("password")}/>
                <input type="text" placeholder="phonenumber" {...register("phonenumber")}/>
                <button>register</button>
            </form>
        </>
    )
}