import "./contact.scss";
import Lottie from "lottie-react";
import Getintouch from "././animatedIcons/Getintouch.json";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import facebookAnimation from "././animatedIcons/facebookAnimation.json";
import Animation from "./animatedIcons/Animation.json";
import instaAnimation from "./animatedIcons/instaAnimation.json";
import twitterAnimation from "./animatedIcons/TweetAnimation.json";

const Contact = () => {
  const facebookUrl = "https://www.facebook.com"; 
  const instagramUrl = "https://www.instagram.com"; 
  const twitterUrl = "https://www.twitter.com";
  return (
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
          <br/>
          <Lottie animationData={Getintouch} />
          <br/>
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
          <TextField label="Subscribe*" id="outlined-size-small" size="small" />
          <Button variant="contained" color="success" size="medium">
            SUBMIT
          </Button>
        </div>
      </div>
      <div className="details">
        <p>
          We are always open to new opportunities. If you have any questions,{" "}
          <br />
          please don&apos;t hesitate to contact us.
        </p>
        <div className="lottie-container">
          <Lottie
            animationData={Animation}
            className="lottie-animation"
          />
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
          <p>New York
          THE CHARLES NEW YORK
          200 Broadway Suite 307
          NY, NY 10038</p>
          
        </div>
        </div>

      
      {/*<div className="details">
                add mobile number and email address
    </div>*/}
    </div>
  );
};

export default Contact;
