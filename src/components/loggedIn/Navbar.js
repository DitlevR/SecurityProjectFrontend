import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const CustomNavbar = ({setLoggedIn}) => {

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Security Exam</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/search" className="nav-link">Search</NavLink>
                <NavLink to="/myposts" className="nav-link">My posts</NavLink>
                <NavLink to="/allposts" className="nav-link">All posts</NavLink>
                <Nav.Link onClick={() => setLoggedIn(false)}>Log out</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <b style={{color: "white"}}>John Doe</b>
                </Navbar.Text>

            </Navbar.Collapse>
        </Navbar>
    );
}
export default CustomNavbar;