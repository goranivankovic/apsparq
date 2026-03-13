import styles from '../../styles/notFound/notFound.module.css';
// import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState ,useEffect } from 'react'

function NotFound() {

  useEffect(() => {
   
      window.scrollTo(0, 0); // Scrolls to the top-left corner
  
  }, []);


  return (
    <div className={`${styles.main} cursor-crosshair`}>


        <motion.div className={styles.firstDiv}
                      initial={{ scale: 1 ,y:0 }}
          animate={{ scale:[2,1] , y :[500,0]}}
           transition={{
            duration: 1,
            delay: 1.5,
            type: "spring",
          }}
        >
          <span >404</span> / <span>NOT FOUND</span></motion.div>

        
    </div>
  )
}

export default NotFound