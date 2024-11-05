import { UserRepository } from "../domain/UserRepository";

export const createUserService = (userRepository: UserRepository) => ({
    createUser: (data: {userId: string,username: string, email: string, password:string, phonenumber:string})=> {
        // validaciones
        userRepository.createUser(data)
    },
    
    getUsers: () => userRepository.getUsers(),
    
    loginUser: (username: string, password: string) => {
        userRepository.userLogin(username, password)
    }

})