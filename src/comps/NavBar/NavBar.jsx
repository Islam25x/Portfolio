import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';

import './NavBar.css'
const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className='d-flex'>
                    <i class="fa-brands fa-google"></i>
                    <p>islam.salah.is08@gmail.com</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <HashLink to="/#Home">Home</HashLink>
                        <HashLink to="/#Services">Services</HashLink>
                        <HashLink to="/#Works">Works</HashLink>
                        <HashLink to="/#Resume">Resume</HashLink>
                        <HashLink to="/#Skills">Skills</HashLink>
                        <HashLink to="/#Contact">Contact</HashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar