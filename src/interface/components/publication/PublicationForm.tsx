import { useCreatePublication } from "../../hooks/publication/useCreatePublication"

export const PublicationForm = () =>{
    const { register, onSubmit} = useCreatePublication()
    return(
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="description" {...register('description')}/>
            <input type="text" placeholder="private data" {...register('privateData')}/>
            <button>create</button>
        </form>
    )
}