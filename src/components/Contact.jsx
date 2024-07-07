import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.from_name) {
      errors.from_name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      emailjs
        .sendForm("service_y7giq8n", "template_7gwo36l", form.current, {
          publicKey: "5jypyq6QcXB2VODbZ",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setLoading(false);
            setShowPopup(true);
            setFormData({ from_name: '', email: '', message: '' });
            form.current.reset();

            // Hide the popup after 3 seconds
            setTimeout(() => {
              setShowPopup(false);
            }, 3000);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setLoading(false);
          }
        );
    }
  };

  return (
    <>
      <NavBar />
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col className="text-center animate__animated animate__fadeInDown" md={6}>
              <img src={contactImg} alt="Contact Us" />
            </Col>
            <Col md={6} className="animate__animated animate__fadeInUp">
              <h2 className="text-center mt-5">Get In  <span className="purple">Touch</span></h2>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} />
                {errors.from_name && <p className="error">{errors.from_name}</p>}
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} />
                {errors.message && <p className="error">{errors.message}</p>}
                <input className="bg-white text-black" type="submit" value="Send" />
              </form>
            </Col>
          </Row>
        </Container>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <div className="checkmark">&#10003; <p>Sent Successfully</p></div>
              
            </div>
          </div>
        )}
        {loading && (
          <div className="loading-popup">
            <div className="spinner"></div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
