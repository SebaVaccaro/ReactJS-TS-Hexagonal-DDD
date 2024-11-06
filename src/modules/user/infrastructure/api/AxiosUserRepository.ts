import axios from "axios";
import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";

export const createAxiosUserRespository = (): UserRepository => {
    const apiClient = axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return{
        async getUsers() {
            const response = await apiClient.get('/user')
            return response.data
        },
        async createUser(user: User){
            const response = await apiClient.post('/user/register', user)
            return response.data
        },
        async userLogin(email: string, password: string){
            const response = await apiClient.post('/user/login', {email, password})
            return response.data
        }
    }
}