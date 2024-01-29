import "./head.scss";
import { motion } from "framer-motion";
import headImage from "./headImage.json";
import Lottie from "lottie-react";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const scrolltextvariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Head() {
  const handleClick = () => {
    const contactSection = document.getElementById("Contact Us");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="head">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ARCHI</motion.h2>
          <motion.h1 variants={textVariants}>
            "Where Style Meets Substance, and Every Stitch Tells a Story."
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              Check our website
            </motion.button>
            <motion.button variants={textVariants} onClick={handleClick}>
              About Us
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="sliding-text"
        variants={scrolltextvariants}
        initial="initial"
        animate="animate"
      >
        αρχή archí αρχή archí
      </motion.div>
      <div className="image-container">
        <Lottie animationData={headImage} />
      </div>
    </div>
  );
}

export default Head;
