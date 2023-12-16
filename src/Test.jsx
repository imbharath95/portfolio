import {motion} from "framer-motion"
import {useState} from "react"

function Test () {
    const [open, setOpen] = useState(false);

    const variants = {
        visible : (i) =>( {
            opacity : 1,
            x : 100,
            // transition : {
            //     stiffness : 100,
            //     type : "spring",
            //     damping: 100
            // }
            transition : {
                // staggerChildren : 0.2
                delay : i*0.3
            }
        }),
        hidden : {
            opacity : 0
        }
    }

    const items = [
        "item1","item2","item3","item4"
    ]
    return (
        <div className="trail">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item, i) => (
                   <motion.li key = {item} variants={variants} custom={i}>{item}</motion.li>
                ))}
                
            </motion.ul>
           
        </div>
    )
}

export default Test;