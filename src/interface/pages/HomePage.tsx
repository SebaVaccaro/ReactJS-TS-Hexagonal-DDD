import { PublicationComponent } from "../components/publication/Publication"
import { useGetPublications } from "../hooks/publication/useGetPublications"

export const HomePage = () => {
    const {publications} = useGetPublications()
    return(
        <>
            {publications && publications.map(publication=> <PublicationComponent publication={publication}/>)}
        </>
    )
}