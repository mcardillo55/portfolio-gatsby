import React, { Component } from 'react';
import './index.css';
import SEO from '../components/seo';
import MainNavbar from '../components/MainNavbar';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorkSection from '../components/WorkSection';
import FooterSection from '../components/FooterSection';
import ReturnToTopButton from '../components/ReturnToTopButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yOffset: 0
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        yOffset: window.pageYOffset
      })
    })
  }
  render() {
    return (
    <div>
      <SEO title="Home" />
      <Container>
        <MainNavbar />
        <div id="content">
          <ScrollAnimation animateIn="fadeIn" animateOnce="True">
            <Row>
              <Col md={12}>
                <hr/>
              </Col>
            </Row>
            <Row className="my-5 pb-4">
                <Col id="about">
                  <AboutSection />
                </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce="True">
            <div>
              <Row>
                <Col>
                  <hr/>
                </Col>
              </Row>
              <Row id="skills">
                    <SkillsSection />
              </Row>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce="True">
            <Row>
                <Col>
                  <hr/>
                </Col>
              </Row>
            <Row>
                <Col id="work">
                  <WorkSection />
                </Col>
            </Row>
          </ScrollAnimation>
        </div>
      </Container>
      <ReturnToTopButton yOffset={this.state.yOffset} />
      <FooterSection />
    </div>
    );
  }
}

export default IndexPage;
