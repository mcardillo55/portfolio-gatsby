import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Job = (props) => {
    return(
        <>
            <Row className="no-gutters">
                <Col xs={2}>
                    <Image className="heading-image pt-2" src={props.image} fluid/>
                </Col>
                <Col xs={10} className="pl-2">
                    <h4>{props.company}</h4>
                    <h5>{props.location}</h5>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className="job-title font-weight-bold">{props.title}</div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div>{props.years}</div>
                </Col>
            </Row>
        </>
    )
}

export default Job;