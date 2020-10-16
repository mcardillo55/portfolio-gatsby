import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillsSection = () => {
  return(
    <Container id="experience">
        <div id="skills">
            <h2>SKILLS</h2>
            <Row className="justify-content-center">
                <Col className="my-2" md={8} lg={3}>
                    <div className="border rounded py-3 px-4">
                        <div className="text-center">
                            <div className="skill-circle">
                                <i class="far fa-file-code fa-2x"></i>
                            </div>
                        </div>
                        <h6 className="mb-2 font-weight-bold text-center">Frontend</h6>
                        <ListGroup variant="flush">
                            <ListGroup.Item>HTML</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>CSS</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Bootstrap</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col className="my-2" md={8} lg={3}>
                    <div className="border rounded py-3 px-4">
                        <div className="text-center">
                            <div className="skill-circle text-center">
                                <i class="fas fa-database fa-2x"></i>
                            </div>
                        </div>
                        <h6 className="mb-2 font-weight-bold text-center">Backend</h6>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Python/Flask/Django</ListGroup.Item>
                            <ListGroup.Item>Node.JS/Express</ListGroup.Item>
                            <ListGroup.Item>MongoDB</ListGroup.Item>
                            <ListGroup.Item>MySQL</ListGroup.Item>
                            <ListGroup.Item>SQLite</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col className="my-2" md={8} lg={3}>
                    <div className="border rounded py-3 px-4">
                        <div className="text-center">
                            <div className="skill-circle text-center">
                                <i class="fas fa-tools fa-2x"></i>
                            </div>
                        </div>
                        <h6 className="mb-2 font-weight-bold text-center">Other</h6>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Docker</ListGroup.Item>
                            <ListGroup.Item>C, C++</ListGroup.Item>
                            <ListGroup.Item>GNU/Linux</ListGroup.Item>
                            <ListGroup.Item>Mac OS X</ListGroup.Item>
                            <ListGroup.Item>Windows</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
  )
};

export default SkillsSection;