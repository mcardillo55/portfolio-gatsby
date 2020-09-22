import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

class SocialSection extends Component {
    constructor() {
        super()
        this.state = {
            email_visible: false 
        }
    }
    toggleEmail = () => {
        if (this.state.email_visible) {
            this.setState({email_visible: false})
        } else {
            this.setState({email_visible: true})
        }
    }
    render() {
        return (
            <Col id="social-media" md={{span: 4, offset: 4}}>
                <a href="https://www.linkedin.com/in/mcardillo55">
                    <i className="fa fa-linkedin-square fa-lg"></i>
                </a>
                <a href="https://twitter.com/mcardillo55">
                    <i className="fa fa-twitter-square fa-lg"></i>
                </a>
                <i className="fa fa-envelope fa-lg" onClick={this.toggleEmail}></i>
                {this.state.email_visible ? <span id="email-address">mcardillo55@gmail.com</span> : null}
            </Col>
        )
    }
};

export default SocialSection;