import React, { useState, useEffect } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import NavBar from './NavBar';

const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(false); // State to control the visibility of the success message

    useEffect(() => {
        if (status === 'success') {
            clearFields();
            setShowSuccess(true);  // Show the success message when submission is successful
        }
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.indexOf("@") > -1) {
            onValidated({
                EMAIL: email
            });
        }
    };

    const clearFields = () => {
        setEmail('');
    };

    return (
        <>
        {/* <NavBar /> */}
        <Col lg={12}>
            <div className="newsletter-bx mt-5 wow slideInUp">
                <Row className='align-items-center'>
                    <Col lg={6} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
                        {status === 'sending' && <Alert variant="info">Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                        {showSuccess && <Alert variant="success">Submitted Successfully!</Alert>}
                    </Col>
                    <Col  md={6} xl={7}>
                        <form>
                            <div className="new-email-bx col-lg-12 col-xl-12">
                                <input  className='submitemail'
                                    value={email} 
                                    type="email" 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Email Address" 
                                />
                            </div>
                                <button className='submitbutton col-12 col-xl-12 mt-2' type="submit">Submit</button>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
        </>
    );
};

export default Newsletter;
