import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons'

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
                                <FontAwesomeIcon icon={faFileCode} size="2x" />
                            </div>
                        </div>
                        <h6 className="mb-2 font-weight-bold text-center">Frontend</h6>
                        <ListGroup variant="flush">
                            <ListGroup.Item>HTML</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>CSS</ListGroup.Item>
                            <ListGroup.Item>ReactJS</ListGroup.Item>
                            <ListGroup.Item>Bootstrap</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col className="my-2" md={8} lg={3}>
                    <div className="border rounded py-3 px-4">
                        <div className="text-center">
                            <div className="skill-circle text-center">
                                <FontAwesomeIcon icon={faDatabase} size="2x" />
                            </div>
                        </div>
                        <h6 className="mb-2 font-weight-bold text-center">Backend</h6>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>Flask/Django</ListGroup.Item>
                            <ListGroup.Item>Node.JS/Express</ListGroup.Item>
                            <ListGroup.Item>PostgreSQL</ListGroup.Item>
                            <ListGroup.Item>Redis</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col className="my-2" md={8} lg={3}>
                    <div className="border rounded py-3 px-4">
                        <div className="text-center">
                            <div className="skill-circle text-center">
                                <FontAwesomeIcon icon={faTools} size="2x" />
                            </div>
                        </div>
                        <h6 className="mb-2 font-weight-bold text-center">Other</h6>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Docker</ListGroup.Item>
                            <ListGroup.Item>GitLab CI/CD</ListGroup.Item>
                            <ListGroup.Item>Prometheus</ListGroup.Item>
                            <ListGroup.Item>Grafana</ListGroup.Item>
                            <ListGroup.Item>GNU/Linux</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
  )
};

export default SkillsSection;