import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Loading";
import { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import  Resume  from "./components/Resume";
// import "./style.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";import { Navbar } from "react-bootstrap";
// import Introduction from "./components/Introduction";



function App() {
  const scrollDemo = useRef();
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Routes>
							<Route
								path="/"
								element={<Banner scrollDemo={scrollDemo} />}
							/>
							<Route path="/banner" element={<Banner /> } />
							<Route path="/skills" element={<Skills />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer /> 
            </div>
    </div>
  );
}

export default App;
