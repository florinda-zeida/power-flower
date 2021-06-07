import { NavLink, useHistory } from 'react-router-dom';
import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import AuthContext from "../../../context/AuthContext";

function Menu() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

    return (

            <Navbar className="navbar" fixed="top" variant="dark" expand="lg">
                <NavLink to="/">
                <Navbar.Brand className="brand">Power Flower</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to="/" exact >
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/contact/" >
                            Contact
                        </NavLink>
                        {auth ? (
                            <>
                            <NavLink className="nav-link" to="/admin">Admin</NavLink> <button className="btn logg"  onClick={logout}>Log out</button>
                            </>
                        ) : (
                            <NavLink to="/login"><button className="btn logg">Login</button></NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Menu;