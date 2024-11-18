import { Publication } from "../entity/Publication";
import { IdI } from "../interface/IdI";
import { NewPublicationI } from "../interface/NewPublicationI";

export interface PublicationRepository{
    createPublication(data: NewPublicationI): Promise<Publication | null>
    getPublicationById(id: IdI): Promise<Publication | null>
    getPublications(): Promise<Publication[] | null>
}