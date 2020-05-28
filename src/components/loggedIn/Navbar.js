import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const CustomNavbar = ({logout, setLoggedIn}) => {
    const logoutHandler = () => {
        logout();
        setLoggedIn(false);
    }
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Security Exam</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/search" className="nav-link">Search</NavLink>
                <NavLink to="/myposts" className="nav-link">My posts</NavLink>
                <NavLink to="/allposts" className="nav-link">All posts</NavLink>
                <Nav.Link onClick={() => logoutHandler()}>Log out</Nav.Link>
            </Nav>
        </Navbar>
    );
}
export default CustomNavbar;