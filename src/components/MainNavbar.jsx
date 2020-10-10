import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-scroll';

import NameLogo from '../images/name_logo.png'

const MainNavbar = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" variant="custom">
            <Navbar.Brand className="mr-auto" id="name"><Image src={NameLogo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span>
                    <i className="fa fa-bars"></i>
                </span></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Link href="#" to="projects" spy={true} smooth={true} hashSpy={true} duration={500} onClick={props.onClick}>
                        <Nav.Link>PROJECTS</Nav.Link>
                    </Link>
                    <Link href="#" to="experience" spy={true} smooth={true} hashSpy={true} duration={500} onClick={props.onClick}>
                        <Nav.Link>EXPERIENCE</Nav.Link>
                    </Link>
                    <Nav.Link href="/mike_cardillo_resume.pdf">RESUME</Nav.Link>
                    <Nav.Link href="https://github.com/mcardillo55">GITHUB</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default MainNavbar;