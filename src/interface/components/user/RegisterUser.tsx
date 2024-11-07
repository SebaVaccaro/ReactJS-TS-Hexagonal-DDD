import { Link } from "react-router-dom"
import { useUserRegistration } from "../../hooks/user/useUserRegistration"


export const RegisterUser = () =>{
    const { register, onSubmitForm} = useUserRegistration()
    return(
        <>
            <Link to='/login'>login</Link>
            <h5>register</h5>
            <form onSubmit={onSubmitForm}>
                <input type="text" placeholder="username" {...register("username")}/>
                <input type="text" placeholder="email" {...register("email")}/>
                <input type="password" placeholder="password" {...register("password")}/>
                <input type="text" placeholder="phonenumber" {...register("phonenumber")}/>
                <button>register</button>
            </form>
        </>
    )
}