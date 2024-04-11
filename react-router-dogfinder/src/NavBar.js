import { NavLink } from "react-router-dom"
import './NavBar.css'

function NavBar({dogs}) {
    return(
        <nav>
            <NavLink to='/dogs'>Home</NavLink>

            {dogs.map(dog => (
                <NavLink key={dog.name.toLowerCase()} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
            ))}
        </nav>
    )
}

export default NavBar;