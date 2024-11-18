import React from "react";
import { Publication } from "../../../modules/publication/domain/entity/Publication";

export const PublicationComponent: React.FC<{publication:Publication | null}> = ({publication}) => {
    return(
        <>{
            publication &&
            <div>
                <h3>{publication._id}</h3>
                <h3>{publication.description}</h3>
            </div>
        }
        </>
    )
}