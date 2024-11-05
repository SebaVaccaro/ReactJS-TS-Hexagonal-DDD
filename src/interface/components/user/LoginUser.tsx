import { useUserLogin } from "../../hooks/user/useUserLogin"

export const LoginUser = () => {
    const { register, onSubmitForm} = useUserLogin()
    return(
        <form onSubmit={onSubmitForm}>
            <input type="email" placeholder="email" {...register("email")}/>
            <input type="password" placeholder="password" {...register("password")}/>
            <button>login</button>
        </form>
    )
}