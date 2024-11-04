import { useForm } from "react-hook-form";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = handleSubmit(() => console.log("submit"))
  return (
    <>
      <h3>registro</h3>
      <form className='formRegister' onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          {...register("username", { 
            required: {value: true, message: "username es requerido"},
            maxLength: {value: 30, message: "username<30"},
            minLength: {value: 4, message: "username>4"}
          })}
        />
        {errors.username && <span>{errors.username.message?.toString()}</span>}
        
        <input type="text"
          placeholder="email"
          {...register("email", {
            required:{ value: true, message: "correo es requerido"},
            pattern: {value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              message:"formato incorrecto"}
          })}
        />
        {errors.email && <span>{errors.email?.message?.toString()}</span>}

        <input type="password"
          placeholder="password"
          {...register("password", {
            required:{ value: true, message: "la password es requerida"},
            maxLength:{value: 50, message: "menor a 50 caracteres"},
            minLength:{value: 6, message: "mayor a 6  mas caracteres"}
          })}
        />
        {errors.password && <span>{errors.password.message?.toString()}</span>}

        <input type="text"
          placeholder="phonenumber"
          {...register("phonenumber", {required:{value: true, message: "el numero es requerido"}})}
        />
        {errors.phonenumber && <span>{errors.phonenumber.message?.toString()}</span>}

        <button>register</button>
      </form>
    </>
  )
}