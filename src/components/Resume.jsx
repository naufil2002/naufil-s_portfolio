import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../assets/Naufil.resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import NavBar from "./NavBar"
import Resume1 from "../assets/img/resume1.PNG"
import Resume2 from "../assets/img/resume2.PNG"

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <NavBar />
      <Container fluid className="resume-section ">
        <Row className="animate__animated animate__fadeInDown" style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

       <div className="text-center mt-5 mb-5 animate__animated animate__fadeInUp">
        <img className="resume" src={Resume1} alt="Resume" /><br />
        <img className="resume" src={Resume2} alt="Resume" />
        </div>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "5rem" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;