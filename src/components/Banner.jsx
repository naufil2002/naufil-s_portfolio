import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import HeaderImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";
// import backgroundVideo from "../assets/bg-video.mp4"
// import Introduction from "./Introduction";
import HeaderImg from "../assets/img/header-img.svg";
import IntroImg from "../assets/img/intro-img.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <NavBar />
      {/* <video autoPlay muted loop id="background-video">
      <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col className="bannerr" xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to My Portfolio</span>
                    <h1>
                      {" "}
                      Hi! I'm{" "}
                      <span className="purple">
                        {` Naufil Shaikh.`}
                        <span className="wrap">
                          <Typewriter
                            options={{
                              strings: [
                                "Web Developer.",
                                "Front End Developer.",
                                "Exploring MERN Stack / Full Stack Development.",
                              ],
                              autoStart: true,
                              loop: true,
                              deleteSpeed: 50,
                            }}
                          />
                        </span>
                      </span>{" "}
                    </h1>
                    <p>
                      I'm passionate about creating
                      engaging web applications.  Seeking opportunity to apply my
                      skills and knowledge to contribute to innovative projects
                      and further develop my expertise
                    </p>
                    <NavLink
                      className="p-4 text-white text-decoration-none"
                      to={"/contact"}
                    >
                      <button
                        className="videobottom"
                        onClick={() => console.log("connect")}
                      >
                        Let's connect <ArrowRightCircle size={25} />
                      </button>
                    </NavLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img className="HeaderImg" src={HeaderImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
        <Container className="containerr">
          <Row className="align-items-center ">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <div>
                      <h1 className=" mb-5 Intro1">
                        LET ME <span className="purple">INTRODUCE</span> MYSELF!
                      </h1>
                      <h5 className="Intro2">
                        I am in love with{" "}
                        <span className="purple fst-italic">programming</span>{" "}
                        because it is not just about writing code 💻, but about
                        creating, innovating, and making a difference 🌐.
                      </h5>
                      <h5 className="mt-5 Intro2">
                        I am fluent in classics like{" "}
                        <span className="purple fst-italic">
                          JavaScript and it's library ReactJS
                        </span>
                      </h5>
                      <h5 className="mt-5 Intro2">
                        My field of Interest's are building new{" "}
                        <span className="purple fst-italic">
                         Frontend Cross Platform Web Apps
                        </span>{" "}
                        and also in areas related to{" "}
                        <span className="purple fst-italic">
                          MERN Stack / Full Stack.
                        </span>
                      </h5>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img className="IntroImg" src={IntroImg} alt="Intro Img" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Introduction /> */}
    </>
  );
};

export default Banner;
