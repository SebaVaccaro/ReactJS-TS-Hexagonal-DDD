import { UserRepository } from "../domain/UserRepository";

export const createUserService = (userRepository: UserRepository) => ({
    createUser: async (data: {userId: string,username: string, email: string, password:string, phonenumber:string})=> {
        // validaciones
        await userRepository.createUser(data)
    },
    
    getUsers: async () => (await userRepository.getUsers()),
    
    loginUser: async (email: string, password: string) => {
       return await userRepository.userLogin(email, password)
    }

})