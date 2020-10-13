import React from 'react';
import Col from 'react-bootstrap/Col';

const SocialSection = () => {
    return (
        <Col id="social-media"  md={{span: 4, offset: 4}}>
            <a href="https://www.linkedin.com/in/mcardillo55">
                <i className="fa fa-linkedin-square fa-lg d-none d-md-inline-block" />
                <i className="fa fa-linkedin-square fa-3x d-md-none mx-1" />
            </a>
            <a href="https://twitter.com/mcardillo55">
                <i className="fa fa-twitter-square fa-lg d-none d-md-inline-block" />
                <i className="fa fa-twitter-square fa-3x d-md-none mx-1" />
            </a>
            <a href="mailto:mcardillo55@gmail.com">
                <i className="fa fa-envelope-square fa-lg d-none d-md-inline-block" />
                <i className="fa fa-envelope-square fa-3x d-md-none mx-1" />
            </a>
        </Col>
    )
};

export default SocialSection;