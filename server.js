const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Email credentials are not set in environment variables.');
        return res.status(500).json({ code: 500, message: 'Internal Server Error: Email credentials are missing.' });
    }

    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // use environment variable
            pass: process.env.EMAIL_PASS // use environment variable
        }
    });

    // Email options
    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // use environment variable
        subject: `New message from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    try {
        // Send email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return res.status(200).json({ code: 200, message: 'Message Sent Successfully' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        return res.status(500).json({ code: 500, message: `Internal Server Error: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
