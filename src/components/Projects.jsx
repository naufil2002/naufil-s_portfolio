import React from "react";
import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import projImg4 from "../assets/img/project-img4.png"
import projImg5 from "../assets/img/project-img5.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import NavBar from "./NavBar";

const Projects = () => {
  const projects = [
    {
      title: "Click Me! for DEMO",
      description: "(Click for DEMO)",
      imgUrl: projImg1,
      link: "https://crisfooddigiverse.com/",
      name: "CrisFood Digiverse"
    },
    {
      title: "Click Me! for DEMO",
      description: "(Click for DEMO)",
      imgUrl: projImg2,
      link: "https://bhaijaandhaba.in/",
      name: "BhaiJaan Dhaba"
    },
    {
      title: "Click Me! for DEMO",
      description: "(Click for DEMO)",
      imgUrl: projImg3,
      link: "https://www.hudhud.in/",
      name: "HudHud Fragrance"
    },
    {
      title: "Click Me! for DEMO",
      description: "(Click for DEMO)",
      imgUrl: projImg4,
      link: "https://sameertutorials.vercel.app/",
      name: "Sameer Tutorials"
    },
    {
      title: "Oops! I'm not live",
      description: "Oops! I'm not live",
      imgUrl: projImg5,
      name: "AnyWhere Hotels"
    },
  ];

  return (
    <>
    <NavBar />
      <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className="mt-5 animate__animated animate__fadeInDown">
                <h2>My Recent <span className="purple">Projects</span></h2>
                <p>I've created projects that blend innovative design with seamless user experiences.</p>
                </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row className=" animate__animated animate__fadeInUp">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    </>
  );
};

export default Projects;
