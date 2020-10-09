import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

const MainNavbar = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" variant="custom">
            <Navbar.Brand className="mr-auto" id="name">Michael Cardillo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span>
                    <i className="fa fa-bars"></i>
                </span></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Link href="#" to="projects" spy={true} smooth={true} hashSpy={true} duration={500} onClick={props.onClick}>
                        <Nav.Link>Projects</Nav.Link>
                    </Link>
                    <Link href="#" to="experience" spy={true} smooth={true} hashSpy={true} duration={500} onClick={props.onClick}>
                        <Nav.Link>Experience</Nav.Link>
                    </Link>
                    <Nav.Link href="/mike_cardillo_resume.pdf">Resume</Nav.Link>
                    <Nav.Link href="https://github.com/mcardillo55">GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default MainNavbar;