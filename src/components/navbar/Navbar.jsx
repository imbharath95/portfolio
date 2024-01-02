



// import "./navbar.scss";
// // import Sidebar from "../sidebar/Sidebar";
// import { motion,useScroll } from "framer-motion";
// function Navbar() {
//     return (
//         <div className="navbar">
//             {/* sidebar */}
//             {/* <Sidebar/> */}
      
//             <div className="wrapper">
//                 <motion.span
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 2 }} >
//                     Clothing Brand
//                 </motion.span>
//                 <div className="social">
//                     <a href="#Home Page">Home</a>
//                     <a href="#Services">Services</a>
//                     <a href="#Contact Us">Contact Us</a>
//                 </div>
//             </div>
          
//         </div>
//     )
// }


// export default Navbar;

import "./navbar.scss";
// import Sidebar from "../sidebar/Sidebar";
import { motion,useScroll } from "framer-motion";
function Navbar() {
    return (
        <div className="navbar">
         
            {/* <Sidebar/> */}
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }} >
                    Clothing Brand
                </motion.span>
                <div className="social">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }} >
                    
                
                    <a href="#Home Page">Home</a>
                    <a href="#Services">Service</a>
                    <a href="#Contact Us">Contact</a>
                </motion.span>
                </div>
            </div>
        </div>
    )
}


export default Navbar;