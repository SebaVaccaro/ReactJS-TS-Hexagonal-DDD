import axios from "axios"
import { Publication } from "../../domain/entity/Publication"
import { IdI } from "../../domain/interface/IdI"
import { NewPublicationI } from "../../domain/interface/NewPublicationI"

export const PublicationAxiosApi = () =>{
    const apiClient = axios.create({
        baseURL: 'http://localhost:3000',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    return{

        createPublication: async (data:NewPublicationI): Promise<Publication>=>{
            const res = await apiClient.post( '/user/publication', data)
            return res.data
        },
        
        getPublicationById: async ({id}: IdI): Promise<Publication>=>{
            const res = await apiClient.get(`/publication/${id}`)
            return res.data
        },

        getPublications: async ():Promise<Publication[]>=>{
            const res =  await apiClient.get('/publication')
            return res.data
        }
    }
}