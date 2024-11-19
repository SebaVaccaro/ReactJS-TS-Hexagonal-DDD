import { Publication } from "../domain/entity/Publication";
import { IdI } from "../domain/interface/IdI";
import { NewPublicationServiceI } from "../domain/interface/NewPublicationServiceI";
import { PublicationRepository } from "../domain/repository/publication.repository";

export const PublicationService = ( publicationRepository: PublicationRepository) =>({
    
    createPublication: async ( data: NewPublicationServiceI): Promise<Publication | null>=>{
        return await publicationRepository.createPublication({...data, requests: [], matches: []})
    },
    
    getPublicationById: async (id: IdI): Promise<Publication  | null>=>{
        return await publicationRepository.getPublicationById(id)
    },
    
    getPublications: async (): Promise<Publication[] | null>=>{
        return await publicationRepository.getPublications()
    }
})