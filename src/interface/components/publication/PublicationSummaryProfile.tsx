import React from "react";
import { Publication } from "../../../modules/publication/domain/entity/Publication";
import { useNavigate } from "react-router-dom";

export const PublicationSummaryComponent: React.FC<{publication:Publication | null}> = ({publication}) => {
    const navigate = useNavigate()
    const toPublication = () =>{
        navigate(`/publication/${publication?._id}`)
    }
    return(
        <>{
            publication &&
            <div onClick={toPublication} className="user-profile">
                <h3>{publication._id}</h3>
                <h3>{publication.description}</h3>
            </div>
        }
        </>
    )
}