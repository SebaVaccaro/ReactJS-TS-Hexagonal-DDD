import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        <div className="NavBar">
            <Link to='/'>home page</Link>
            <Link to='/auth/login'>login</Link>
            <Link to='/user/register'>register</Link>
            <Link to='/user/:id'>user profile</Link>
        </div>
    )
}