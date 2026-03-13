import styles from '../../styles/slika/slika.module.css';

import slika from '../../assets/ljudi.jpg'

import { motion, useScroll, useTransform ,useInView } from "framer-motion";
import { useRef,useState } from "react";


function Slika() {


     const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [visible2, setVisible2] = useState(false);



  const handleMouseMove2 = (e) => {



    const rect = e.currentTarget.getBoundingClientRect();
    setPosition2({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top- 100,
    });
    setVisible2(true);


  };

  const handleMouseLeave2 = () => {
    setVisible2(false);

   
  };



  return (
    <div className={styles.secondDiv}
     onMouseMove={handleMouseMove2}
    onMouseLeave={handleMouseLeave2} 
    
    >


                       {visible2 ?
                    <div
                      className={styles.nevidljiviDiv2}
                      style={{
                        left: position2.x + 60,
                        top: position2.y  - 30,
                        opacity:[0,1],
                        transition:2,
                        
                  
                      }}
                    > 
            
            
                     </div>
                  :''
                }
      

        <motion.img 
              initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        src={slika} alt="" />

    </div>
  )
}

export default Slika