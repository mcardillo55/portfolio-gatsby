import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectCard from './ProjectCard'
import CBPro from '../images/cbprotrader.png'
import SCDJ from '../images/soundclouddj.png'
import Unfriended from '../images/unfriended.png'
import SSPL from '../images/sspl.png'
import ImgSite from '../images/imgsite.png'

const ProjectsSection = () => {
  return(
    <div id="projects">
        <div id="projects">
            <h2>Projects</h2>
            <Row className="mb-3">
            <Col md={6} className="my-2 my-md-0">
                <ProjectCard title="cbpro-trader" 
                        source_link="https://github.com/mcardillo55/cbpro-trader"
                        demo_link="https://www.michaeljcardillo.com/cbpro/"
                        image={CBPro}
                        description="Automated cryptocurrency trader that uses technical analysis strategies to trade on live tick data provided by Coinbase"
                        stack={["Python", "Websocket", "NumPy"]}
                        years="2017-2018" 
                        tasks={["Consumes tick data <a href='https://pro.coinbase.com/'>Coinbase Pro</a> websocket",
                                "Calculates <a href='https://en.wikipedia.org/wiki/Technical_analysis'>technical analysis</a> indicators",
                                "Places buy and sell orders in threads via the Coinbase Pro REST API",
                                "Determines whether to place free limit orders or instant market orders, based on market volatility, ",
                                "Features curses interface to view real-time program data in console"]}/>
              </Col>
              <Col md={6} className="my-2 my-md-0">
                <ProjectCard title="soundcloud-dj" 
                        source_link="https://github.com/mcardillo55/soundcloud-dj"
                        demo_link="https://www.michaeljcardillo.com/scdj"
                        image={SCDJ}
                        description="Parses a Facebook group with Graph API to locate and store SoundCloud and YouTube URLs. Songs are then displayed in their respective player via an AngularJS Frontend"
                        stack={["Python", "Flask", "AngularJS", "SQLite", "SocketIO"]}
                        years="2014" />
              </Col>
            </Row>
            <Row>
              <Col md={6} className="my-2 my-md-0">
                <ProjectCard title="unfriended" 
                        source_link="https://github.com/mcardillo55/unfriended-flask"
                        demo_link="https://www.michaeljcardillo.com/unfriended-flask/"
                        image={Unfriended}
                        description="Obtains and stores user's Facebook Friend List to be compared with lists on subsequent visits to display those who have removed you."
                        stack={["Python", "Flask", "Bootstrap"]}
                        years="2014" />
              </Col>
              <Col md={6} className="my-2 my-md-0">
                <ProjectCard title="ImgSite" 
                        source_link="https://github.com/mcardillo55/imagesite"
                        demo_link="https://www.michaeljcardillo.com/imgsite"
                        image={ImgSite}
                        description="Clone of Imgur. Image hosting service with user accounts."
                        stack={["Python", "Django", "Bootstrap"]}
                        years="2014" />
              </Col>
            </Row>
            <Row>
              <Col md={6} className="my-2 my-md-0">
                <ProjectCard title="Student Space Programs Laboratory"
                        stack={["C", "GTK+"]}
                        image={SSPL}
                        years="2010" 
                        description="Developed front end interface to parse XML messages from a near-space satellite, which were then classified by severity and displayed in table" />
              </Col>
            </Row>
        </div>
    </div>
  )
}

export default ProjectsSection;
