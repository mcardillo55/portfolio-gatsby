import React, {useRef} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MainNavbar = (props) => {
    let collapse_ref = useRef(null);
    const getOffset = () => {
        let offset = collapse_ref.current.clientHeight;

        return (offset < 50 ? 0 : offset * -1)
    }

    const data = useStaticQuery(graphql`
    query{
        nameLogoImage: file(relativePath: { eq: "name_logo.jpg" }) {
                            childImageSharp {
                                fixed(quality: 100) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
        }
    }
    `)

    return(
        <Navbar collapseOnSelect expand="lg" variant="custom">
            <Navbar.Brand className="mr-auto" id="name"><Img fixed={data.nameLogoImage.childImageSharp.fixed} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span>
                    <FontAwesomeIcon icon={faBars} />
                </span></Navbar.Toggle>
            <Navbar.Collapse ref={collapse_ref}>
                <Nav className="ml-auto">
                    <Nav.Link eventKey="1" onSelect={() => scroller.scrollTo('about', {
                        smooth: true,
                        offset: getOffset(),
                        duration: 500
                    })}>
                        ABOUT
                    </Nav.Link>
                    <Nav.Link eventKey="2" onSelect={() => scroller.scrollTo('skills', {
                        smooth: true,
                        offset: getOffset(),
                        duration: 500
                    })}>
                        SKILLS
                    </Nav.Link>
                    <Nav.Link eventKey="3" onSelect={() => scroller.scrollTo('work', {
                        smooth: true,
                        offset: getOffset(),
                        duration: 500
                    })}>
                        WORK
                    </Nav.Link>
                    <Nav.Link eventKey="4" href="/mike_cardillo_resume.pdf">RESUME</Nav.Link>
                    <Nav.Link eventKey="5" href="https://github.com/mcardillo55">GITHUB</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default MainNavbar;