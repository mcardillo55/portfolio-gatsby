import React from 'react';
import HalfDome from '../images/halfdome.jpg';
import PSULogo from '../images/psu_logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const AboutSection = () => {
    return(
        <div>
            <h1 id="hello-world" className="text-center">Hello, World!</h1>
            <Row>
                <Col md={{span: 10, offset: 1}}>
                    <Row>
                        <Col md={{span: 10, offset: 1}}>
                            <h4 className="text-center mb-4">I'm Michael, a software engineer in the San Francisco Bay Area.</h4>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="my-auto" xs={{span: 12, order: 1}} lg={{span: 6, offset:0, order: 2}}>
                            <p>I received a Bachelor of Science in Computer Engineering from Penn State University, and I've worked in a variety of areas, from web
                            development to Linux kernel development. Outside of coding, I enjoy gaming, <a href="https://www.strava.com/athletes/5396583">hiking
                            and cycling.</a>
                            </p>
                        </Col>
                        <Col className="my-auto" xs={{span:6, offset:0, order: 3}} lg={{span: 3, offset:0, order: 3}}>
                                <Image src={HalfDome} fluid rounded/>
                        </Col>
                        <Col className="my-auto" xs={{span:6, offset:0, order: 2}} lg={{span: 3, offset:0, order: 1}}>
                                <Image  src={PSULogo} fluid/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            <h6>Below is an interesting selection of my work. Feel free to <a href="mailto:mcardillo55@gmail.com">contact me</a> with any questions, collaborations or work opportunities!</h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
  }
  
  export default AboutSection;
  