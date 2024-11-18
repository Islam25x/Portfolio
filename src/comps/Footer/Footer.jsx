import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import './Footer.css'
const Footer = () => {
    return (
        <footer id='Footer'>
            <Container>
                <h1 className='title text-center'>
                    <i class="fa-brands fa-google"></i>
                </h1>
                <nav className='d-flex justify-content-center'>
                    <HashLink to="/#Home">Home</HashLink>
                    <HashLink to="/#Services">Services</HashLink>
                    <HashLink to="/#Works">Works</HashLink>
                    <HashLink to="/#Resume">Resume</HashLink>
                    <HashLink to="/#Skills">Skills</HashLink>
                    <HashLink to="/#Contact">Contact</HashLink>
                </nav>
                <p>© 2024 All Rights Reserved by ThemeJunction</p>
            </Container>
        </footer>
    )
}
export default Footer