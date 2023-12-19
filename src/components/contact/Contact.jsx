
import "./contact.scss";
import Lottie from "lottie-react";
import subscribe from "././sunscribe.json";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Contact = () => {

    return (

        <div className="contact">
            <div className="heading">
                <h2>Contact Us</h2>
            </div>
            <div className="subscribe">

                <p className="advice" style={{color : "greenyyellow"}}>Talk with an advisor to create a customized inbound program that blends<br />
                    proven strategy with tactical instruction and guarantees results</p>
                <div className="lottie-subscribe">
                    <Lottie animationData={subscribe} />
                    <h2 style={{color : "green"}}>Talk with advisor</h2><br />
                    <p>Enter your E-mail address<br />
                        We'll connect you with the right person.</p>
                </div>
                <div className="input-field">
                    <h4>Enter E-mail address*</h4><br />
                    <TextField
                        label="Subscribe*"
                        id="outlined-size-small"
                        size="small"
                    />
                    <Button variant="contained" color="success" size="medium">
                        SUBMIT
                    </Button>
                </div>
            </div>
            <div className="details">
                add mobile number and email address
            </div>

        </div>
    )
}


export default Contact;