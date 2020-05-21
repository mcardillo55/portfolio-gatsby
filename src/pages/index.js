import React, { Component } from 'react';
import './index.css';
import SEO from '../components/seo';
import NameHeader from '../components/NameHeader';
import CircleButtons from '../components/CircleButtons';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
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
        <ScrollAnimation animateIn="fadeIn" animateOnce="True">
          <NameHeader />
          <CircleButtons onClick={this.handleCircleClick}/>
        </ScrollAnimation>
        <div id="content">
          <ScrollAnimation animateIn="fadeIn" animateOnce="True">
            <Row>
              <Col md={12}>
                <hr/>
              </Col>
            </Row>
            <Row>
                <Col id="projects" md={{span: 10, offset: 1}}>
                  <ProjectsSection />
                </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce="True">
            <div className="pb-5" >
              <Row>
                <Col md={12}>
                  <hr/>
                </Col>
              </Row>
              <Row id="experience">
                  <Col md={{span: 10, offset: 1}}>
                    <ExperienceSection />
                  </Col>
              </Row>
            </div>
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
