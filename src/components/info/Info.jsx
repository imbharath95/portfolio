import Lottie from "lottie-react";
import webdevpic from "./webdevPic.json";
import onlineShopping from "./onlineShoppingPic.json";
import support from "./support.json";
import "./info.scss";
import { motion } from "framer-motion";
const scrolltextvariants = {
    initial: {
        x: 5,
    },
    animate: {
        x: "-2%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
        }
    },
}
const Test = () => {
    return (
        <div className="info" >
            
            <motion.div className="heading">
                WHAT WE DO ?
            </motion.div>
            <div className="web-development">
                <div className="lottie-webdev">
                    <Lottie animationData={webdevpic} />
                </div>
                <div className="web-content">
                    <h4>WEB DEVELOPMENT</h4>
                    <p>Crafting dynamic online experiences!<br />
                        We specialize in responsive web development,<br />
                        creating user-friendly interfaces and robust back-end solutions.<br />
                        Elevate your digital presence with our tailored web solutions.
                    </p>
                </div>
            </div>
            <div className="e-cart">
                <div className="lottie-onlineshopping">
                    <Lottie animationData={onlineShopping} />
                </div>
                <div className="ecart-content">
                    <h4>E-COMMERCE WEBSITE</h4>
                    <p>Shop effortlessly with us!<br />
                        Explore a curated selection of products,<br />
                        enjoy secure transactions, and doorstep delivery.<br />
                        Elevate your online shopping experience with convenience<br />
                        and quality at your fingertips
                    </p>
                </div>
            </div>
            <div className="customer-support">
                <div className="lottie-support">
                    <Lottie animationData={support} />
                </div>
                <div className="support-content">
                    <h4>COLLABORATIONS</h4>
                    <p>Empower your projects with dedicated support!<br />
                        We offer comprehensive customer support services for your web development endeavors.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Test;