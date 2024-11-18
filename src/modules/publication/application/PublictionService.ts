import { Publication } from "../domain/entity/Publication";
import { IdI } from "../domain/interface/IdI";
import { NewPublicationI } from "../domain/interface/NewPublicationI";
import { PublicationRepository } from "../domain/repository/publication.repository";

export const PublicationService = ( publicationRepository: PublicationRepository) =>({
    createPublication: async (data: NewPublicationI): Promise<Publication | null>=>{
        return await publicationRepository.createPublication(data)
    },
    getPublicationById: async (id: IdI): Promise<Publication  | null>=>{
        return await publicationRepository.getPublicationById(id)
    },
    getPublications: async (): Promise<Publication[] | null>=>{
        return await publicationRepository.getPublications()
    }
})