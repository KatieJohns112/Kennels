import React from "react"
import { Link, useHistory} from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    }

    return (
      
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
             <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li>}
        </ul>
     
        // "to" = / is what you want it to look like in web address ex. Kennels.com/Employees
        // 'Link" is imported from react-router-dom found in nodemodules.js
    )
}

