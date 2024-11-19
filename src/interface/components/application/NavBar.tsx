import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        <div className="NavBar">
            <Link to='/'>home page</Link>
            <Link to='/publication/create'>create publication</Link>
        </div>
    )
}