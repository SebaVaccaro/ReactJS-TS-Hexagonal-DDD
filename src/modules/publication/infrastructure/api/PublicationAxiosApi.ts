import axios from "axios"
import { Publication } from "../../domain/entity/Publication"
import { IdI } from "../../domain/interface/IdI"

export const PublicationAxiosApi = () =>{
    const apiClient = axios.create({
        baseURL: 'http://localhost:3000',
        headers:{
            'Content-Type': 'aplication/json'
        }
    })
    return{

        createPublication: async (data:Publication): Promise<Publication>=>{
            const res = await apiClient.post( '/user/publication', data)
            return res.data
        },
        
        getPublicationById: async (id: IdI): Promise<Publication>=>{
            const res = await apiClient.get(`/publication/${id}`)
            return res.data
        },

        getPublications: async ():Promise<Publication[]>=>{
            const res =  await apiClient.get('/publication')
            return res.data
        }
    }
}