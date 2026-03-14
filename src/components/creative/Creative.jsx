





import styles from '../../styles/creative/creative.module.css';




import astronaut from '../../assets/astronaut.jpg'
import boja from '../../assets/boja.jpg'
import pc from '../../assets/pc.jpg'
import trikruga from '../../assets/trikruga.png'

import { useEffect,useState } from "react";

function Creative() {

useEffect(() => {

  window.scrollTo({
  top: 0,
  behavior: 'smooth'
});



  return () => {
    
  }
}, [])



   const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);



  const handleMouseMove = (e) => {



    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top- 100,
    });
    setVisible(true);


  };

  const handleMouseLeave = () => {
    setVisible(false);

   
  };


  
  return (



    <div className={styles.main}
      onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    >


                     {visible ?
              <div
                className={styles.nevidljiviDiv}
                style={{
                  left: position.x +10,
                  top: position.y +80,
                  opacity:[0,1],
                  transition:2,
                  
            
                }}
              > 
      
      
               </div>
            :''
          }



                  <div className={styles.firstDiv} > 

                      <div className={styles.headline}>CREATIVE IDEAS(<span style={{color:"#000000"}}>04</span>)</div>

                  </div>


             <div className={styles.hugeText}>APSPARQ</div>




                        
<div className={styles.slikeDiv}>

                         <img src={astronaut}  alt="" />

                          <img src={boja}  alt="" />

                             <img src={pc}  alt="" />



             <div className={styles.prazan}> </div>
          

</div>



    </div>





  )
}

export default Creative