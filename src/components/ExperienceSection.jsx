import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Job from './Job';

const ExperienceSection = () => {
  return(
    <Container id="experience">
        <div id="skills">
            <h2>SKILLS</h2>
            <Row>
                <Col sm={6}>
                    <h6 className="my-3 font-weight-bold">Programming Languages</h6>
                    <ListGroup>
                        <ListGroup.Item>Python, JavaScript/Node.JS</ListGroup.Item>
                        <ListGroup.Item>C, C++</ListGroup.Item>
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={6}>
                    <h6 className="my-3 font-weight-bold">Web Frameworks</h6>
                    <ListGroup>
                        <ListGroup.Item>Flask</ListGroup.Item>
                        <ListGroup.Item>Django</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <h6 className="my-3 font-weight-bold">Databases</h6>
                    <ListGroup>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>MySQL</ListGroup.Item>
                        <ListGroup.Item>SQLite</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={6}>
                    <h6 className="my-3 font-weight-bold">Operating Systems</h6>
                    <ListGroup>
                        <ListGroup.Item>GNU/Linux</ListGroup.Item>
                        <ListGroup.Item>Mac OS X</ListGroup.Item>
                        <ListGroup.Item>Windows</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    </Container>
  )
};

export default ExperienceSection;