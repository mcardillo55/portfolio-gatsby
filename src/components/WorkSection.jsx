import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectCard from './ProjectCard'
import ProjectImageModal from './ProjectImageModal'
import { graphql, useStaticQuery } from 'gatsby';
import CiscoLogo from '../images/cisco_logo.svg';

const WorkSection = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalSrc, setModalSrc] = React.useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (src) => { setModalSrc(src); setShowModal(true) };
  
  const data = useStaticQuery(graphql
    `query{
      alLogo: file(relativePath: { eq: "algologic.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
      },
      cbproImage: file(relativePath: { eq: "cbprotrader.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
      },
      scdjImage: file(relativePath: { eq: "soundclouddj.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
      },
      unfriended: file(relativePath: { eq: "unfriended.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
      },
      ssplImage: file(relativePath: { eq: "sspl.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
      },
      imgsiteImage: file(relativePath: { eq: "imgsite.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
      },
      aqiImage: file(relativePath: { eq: "aqi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
      }
  }`
  )

  const projects_list = 
  [
    {
      title: "Algo-Logic Systems",
      image: data.alLogo.childImageSharp.fluid,
      description: "Senior Full Stack software engineer, responsible for several different web systems, CI/CD workflows, and DevOps monitoring",
      demo_link: "https://www.algo-logic.com/",
      stack: ["Python", "Django", "Flask", "ReactJS", "GitLab CI/CD", "Docker", "Grafana", "Prometheus"],
      years: "2021-Current"
    },
    {
      title: "cbpro-trader",
      source_link: "https://github.com/mcardillo55/cbpro-trader",
      demo_link: "https://www.michaeljcardillo.com/cbpro/",
      image: data.cbproImage.childImageSharp.fluid,
      description: "Automated cryptocurrency trader that uses technical analysis strategies to trade on live tick data provided by Coinbase.",
      stack: ["Python", "Flask", "ReactJS", "Websockets", "NumPy"],
      years: "2017-2018"
    },
    {
      title: "Cisco Systems",
      image: CiscoLogo,
      image_pad: true,
      description: "Implemeted kernel features such as a system page, OS hardening, upstream patch merge automation, and urgent CVE patching.",
      stack: ["Python", 'Bash', "C", "Yocto"]
    },
    {
      title: "ImgSite",
      source_link: "https://github.com/mcardillo55/imagesite",
      demo_link: "https://www.michaeljcardillo.com/imgsite",
      image: data.imgsiteImage.childImageSharp.fluid,
      description: "Clone of Imgur - an image hosting service with user accounts.",
      stack: ["Python", "Django", "Bootstrap"],
      years: "2016"
    },
    {
      title: "soundcloud-dj",
      source_link: "https://github.com/mcardillo55/soundcloud-dj",
      demo_link: "https://www.michaeljcardillo.com/scdj",
      image: data.scdjImage.childImageSharp.fluid,
      description: "Parses a Facebook group with Graph API to locate and store SoundCloud and YouTube URLs. Songs are then displayed in their respective player via an AngularJS Frontend.",
      stack: ["Python", "Flask", "AngularJS", "SQLite", "SocketIO"],
      years: "2014"
    },
    {
      title: "Air Quality GNOME Extension",
      source_link: "https://github.com/mcardillo55/gnome-shell-extension-air-quality",
      demo_link: "https://extensions.gnome.org/extension/3574/air-quality/",
      image: data.aqiImage.childImageSharp.fluid,
      description: "A GNOME Desktop extension that locates and displays air quality from local PurpleAir sensors.",
      stack: ["JavaScript", "GJS", "GNOME"],
      years: 2020
    },
    {
      title: "unfriended",
      source_link: "https://github.com/mcardillo55/unfriended-flask",
      image: data.unfriended.childImageSharp.fluid,
      description: "Obtains and stores user's Facebook Friend List to be compared with lists on subsequent visits to display those who have removed you.",
      stack: ["Python", "Flask", "Bootstrap"],
      years: "2014"
    },
    {
      title: "Student Space Programs Laboratory",
      image: data.ssplImage.childImageSharp.fluid,
      image_pad: true,
      description: "Developed front end interface to parse XML messages from a near-space satellite, which were then classified by severity and displayed in table.",
      stack: ["C", "GTK+"],
      years: "2010"
    }
  ]

  return(
    <div id="projects">
        <div id="projects">
            <h2>WORK</h2>
            <ProjectImageModal show={showModal}
                               src={modalSrc}
                               handleShow={handleShowModal} 
                               handleClose={handleCloseModal} />
            <Row className="mb-3">
              {
                projects_list.map((cur_project) => {
                  return (
                    <Col md={6} lg={4} className="my-2">
                      <ProjectCard title={cur_project.title}
                              source_link={cur_project.source_link}
                              demo_link={cur_project.demo_link}
                              image={cur_project.image}
                              image_pad={cur_project.image_pad}
                              image_modal_handler={handleShowModal}
                              description={cur_project.description}
                              stack={cur_project.stack}
                              years={cur_project.years} />
                    </Col>
                  )
                })
              }
            </Row>
        </div>
    </div>
  )
}

export default WorkSection;
