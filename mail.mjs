import 'dotenv/config'
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS,
    
    },
    tls: {
        rejectUnauthorized: false,
    }

});


try {
    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: 'gagebays@gmail.com',
        subject: 'CIS 486',
        text: 'Hello'

    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error:', error);
        res.status(500).send("Failed to send email");
      } else {
        console.log('Email sent:', info.response);
        res.json({success : req.body.emailBody, status : 200, info: info.response});
      }
    });
 
  } catch (error) {
    console.error('Error in /register:', error);
    res.status(500).send("Internal Server Error");
  };