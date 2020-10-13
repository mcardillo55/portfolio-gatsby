import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { scroller } from 'react-scroll';

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
                    <Nav.Link eventKey="1" onSelect={() => scroller.scrollTo('about', {
                        smooth: true,
                        offset: -184,
                        duration: 500
                    })}>
                        ABOUT
                    </Nav.Link>
                    <Nav.Link eventKey="2" onSelect={() => scroller.scrollTo('projects', {
                        smooth: true,
                        offset: -184,
                        duration: 500
                    })}>
                        PROJECTS
                    </Nav.Link>
                    <Nav.Link eventKey="3" onSelect={() => scroller.scrollTo('experience', {
                        smooth: true,
                        offset: -184,
                        duration: 500
                    })}>
                        EXPERIENCE
                    </Nav.Link>
                    <Nav.Link eventKey="4" href="/mike_cardillo_resume.pdf">RESUME</Nav.Link>
                    <Nav.Link eventKey="5" href="https://github.com/mcardillo55">GITHUB</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default MainNavbar;