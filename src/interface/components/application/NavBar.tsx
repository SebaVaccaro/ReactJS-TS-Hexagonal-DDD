import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        <div>
            <Link to='/'>home page</Link>
            <Link to='/login'>login</Link>
            <Link to='/register'>register</Link>
            <Link to='/user'>user profile</Link>
        </div>
    )
}