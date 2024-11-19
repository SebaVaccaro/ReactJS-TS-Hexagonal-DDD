import { PublicationSummaryComponent } from "../components/publication/PublicationSummaryProfile"
import { useGetPublications } from "../hooks/publication/useGetPublications"

export const HomePage = () => {
    const {publications} = useGetPublications()
    return(
        <>
            {publications && publications.map((publication, index)=> 
                <PublicationSummaryComponent key={index} publication={publication}/>
            )}
        </>
    )
}