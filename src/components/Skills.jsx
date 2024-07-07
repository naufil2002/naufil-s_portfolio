import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
// import Skillscard from "./SkillsCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import NavBar from "./NavBar";

function Skills() {
  return (
    <>
    <NavBar />
    <Container fluid className="about-section animate__animated animate__fadeInUp">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
        <h1 className="project-heading text-center">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading text-center">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
    </>
  );
}

export default Skills;