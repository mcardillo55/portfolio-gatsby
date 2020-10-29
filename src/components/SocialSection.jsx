import React from 'react';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const SocialSection = () => {
    return (
        <Col id="social-media"  md={{span: 4, offset: 4}}>
            <a href="https://www.linkedin.com/in/mcardillo55">
                <FontAwesomeIcon className="d-none d-md-inline-block" icon={faLinkedin} size="lg" />
                <FontAwesomeIcon className="d-md-none mx-1" icon={faLinkedin} size="3x" />
            </a>
            <a href="https://twitter.com/mcardillo55">
                <FontAwesomeIcon className="d-none d-md-inline-block" icon={faTwitterSquare} size="lg" />
                <FontAwesomeIcon className="d-md-none mx-1" icon={faTwitterSquare} size="3x" />
            </a>
            <a href="mailto:mcardillo55@gmail.com">
                <FontAwesomeIcon className="d-none d-md-inline-block" icon={faEnvelopeSquare} size="lg" />
                <FontAwesomeIcon className="d-md-none mx-1" icon={faEnvelopeSquare} size="3x" />
            </a>
        </Col>
    )
};

export default SocialSection;