import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu on navigation
    window.scrollTo(0, 0); // Scroll to top on navigation
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={hasScrolled || menuOpen ? "header-with-scroll" : "header-without-scroll"}>
      <Container>
        <nav className="d-flex justify-content-between align-items-center">
          <div className="logoo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="d-flex align-items-center">
            <div className={`navigation-text ${menuOpen ? "open" : ""}`}>
              <NavLink className="p-4 text-white navvv navs" to={"/"} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink className="p-4 text-white navvv navs" to={"/skills"} onClick={toggleMenu}>
                Skills
              </NavLink>
              <NavLink className="p-4 text-white navvv navs" to={"/projects"} onClick={toggleMenu}>
                Projects
              </NavLink>
              <NavLink className="p-4 text-white navvv navs" to={"/contact"} onClick={toggleMenu}>
                Contact
              </NavLink>
              <NavLink className="p-4 text-white navvv navs" to={"/resume"} onClick={toggleMenu}>
                Resume
              </NavLink>
            </div>
            <div className="show-close-button me-5">
              {menuOpen ? (
                <div className="close-button" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              ) : (
                <div className="hamburger" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default NavBar;
