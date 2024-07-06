import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MailChimpForm from './MailChimpForm'
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import NavBar from './NavBar';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <>
    {/* <NavBar /> */}
     <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/naufil2002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://linkedin.com/in/naufil-shaikh-22369825b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/naufil.x?igsh=dWJvanBuNjVvYXZr&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="mailto:naufilcoder@gmail.com"
                className="icon-colour home-social-icons"
                target="_blank" 
                rel="noreferrer"
              >
                <SiGmail />
              </a>
            </li>
            </ul>
          </Col>
        
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer