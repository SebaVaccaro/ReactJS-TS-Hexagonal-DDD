import { UserCreate } from "../domain/UserCreate";
import { UserRepository } from "../domain/UserRepository";

export const UserService = (userRepository: UserRepository) => ({
    createUser: async (data: UserCreate)=> {
        // validaciones
        await userRepository.createUser(data)
    },
    getUserById : async (id: string) =>{
        return await userRepository.getUserById(id)
    },
    getUsers: async () => (await userRepository.getUsers()),
    
    loginUser: async (email: string, password: string) => {
       return await userRepository.userLogin(email, password)
    }

})