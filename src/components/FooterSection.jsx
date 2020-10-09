import React from 'react';
import SocialSection from './SocialSection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const FooterSection = () => {
  return(  
    <footer className="footer" id="footer">
        <Container id="footer-container" className="text-center">
          <Row>
            <Col md={4}>
                SF Bay Area, California &#8226; {new Date().getFullYear()}
            </Col>
            <SocialSection />
          </Row>
        </Container>
    </footer>
  )
};

export default FooterSection;
