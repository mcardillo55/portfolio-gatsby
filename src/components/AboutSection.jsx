import React from 'react';
import Col from 'react-bootstrap/Col';

const AboutSection = () => {
    return(
        <div>
            <h2 className="text-center">Hello, World!</h2>
            <Col md={{span: 8, offset: 2}}>
                <p>I'm Michael, a software engineer in the San Francisco Bay Area.
                I've worked in a variety of areas, from web development to Linux kernel development.
                Below is an interesting selection of my work. Outside of coding, I enjoy
                gaming, <a href="https://www.strava.com/athletes/5396583">hiking and cycling.</a> </p>
                <p>Feel free to <a href="mailto:mcardillo55@gmail.com">contact me</a> with any questions, collaborations or work opportunities!</p>
            </Col>
        </div>
    )
  }
  
  export default AboutSection;
  