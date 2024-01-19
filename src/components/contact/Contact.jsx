import "./contact.scss";
import Lottie from "lottie-react";
import Getintouch from "././animatedIcons/Getintouch.json";
import facebookAnimation from "././animatedIcons/facebookAnimation.json";
import Animation from "./animatedIcons/Animation.json";
import instaAnimation from "./animatedIcons/instaAnimation.json";
import twitterAnimation from "./animatedIcons/TweetAnimation.json";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const facebookUrl = "https://www.facebook.com";
  const instagramUrl = "https://www.instagram.com";
  const twitterUrl = "https://www.twitter.com";
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_ptuy9py";
    const templateId = "template_v5voa8y";
    const publicKey = "_nH6q8rKqv-sf4AqF";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_email: email,
      to_name: "Clothing Shop",
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);

        setEmail("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div className="contact">
        <div className="heading">
          <h2>Contact Us</h2>
        </div>
        <div className="subscribe">
          <p className="advice" style={{ color: "greenyyellow" }}>
            Talk with an advisor to create a customized inbound program that
            blends
            <br />
            proven strategy with tactical instruction and guarantees results
          </p>
          <div className="lottie-subscribe">
            <br />
            <Lottie animationData={Getintouch} />
            <h2 style={{ color: "green" }}>Talk with advisor</h2>
            <br />
            <p>
              Enter your E-mail address
              <br />
              We&apos;ll connect you with the right person.
            </p>
          </div>
          <div className="input-field">
            <h4>Enter E-mail address*</h4>
            <br />
            <form onSubmit={handleSubmit} className="emailForm">
              <input
                label="Subscribe*"
                id="outlined-size-small"
                size="small"
                type="email"
                placeholder="  Subscribe*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                variant="contained"
                color="success"
                size="medium"
              >
                SUBMIT
              </button>
            </form>
            {/* <TextField label="Subscribe*" id="outlined-size-small" size="small" /> */}
            {/* <Button variant="contained" color="success" size="medium">
            SUBMIT
          </Button> */}
          </div>
        </div>
        <div className="details">
          <p>
            We are always open to new opportunities. If you have any questions,{" "}
            <br />
            please don&apos;t hesitate to contact us.
          </p>
          <div className="lottie-container">
            <Lottie animationData={Animation} className="lottie-animation" />
          </div>
          <div className="social-icons">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <div className="socialIcon">
                <Lottie animationData={facebookAnimation} />
              </div>
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <div className="socialIcon">
                <Lottie animationData={instaAnimation} />
              </div>
            </a>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <div className="socialIcon">
                <Lottie animationData={twitterAnimation} />
              </div>
            </a>
          </div>
          <div className="office-details">
            <div className="vertical-line"></div>
            <h3>Our Office</h3>
            <p>
              New York THE CHARLES NEW YORK 200 Broadway Suite 307 NY, NY 10038
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
