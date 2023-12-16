import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion,useScroll } from "framer-motion";
function Navbar() {
    return (
        <div className="navbar">
            {/* sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }} >
                    Clothing Brand
                </motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}


export default Navbar;