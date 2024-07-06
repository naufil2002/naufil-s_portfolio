import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import HeaderImg from "../assets/img/header-img.svg";

const Introduction = () => {
  return (
    <>
      
      <section className="bg-img">
        <Container>
          <Row className="align-items-center pt-5">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h1 className="ms-5 mb-5">
                    LET ME <span className="purple">INTRODUCE</span> MYSELF!
                    </h1>
                   <h3 className="Introduction">I am in love with programming because it is not just about writing code 💻, but about creating, innovating, and making a difference 🌐.</h3>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={HeaderImg} alt="Header Img" />
            </Col>
          </Row>
          </ Container>
        </section>
    </>
  )
}

export default Introduction