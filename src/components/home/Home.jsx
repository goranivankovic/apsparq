import styles from '../../styles/home/home.module.css';

import dj from '../../../video/video2.mp4'
import { motion, useScroll, useTransform ,useInView, transform } from "framer-motion";
import Slider from '../slider/Slider';
import { useRef,useState } from "react";


import sto from '../../assets/sto.jpg'
import kamera from '../../assets/tastatura.jpg'


import HoverText from '../hoverText/HoverText'





function Home() {



const [bg, setbg] = useState('#FFFFFF')






  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });


  const width = useTransform(scrollYProgress, [0, 1], ["100%", "40%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["auto", "auto"]);

  const showSmallVideo = scrollYProgress.get() > 0.9; // kad si blizu kraja




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







  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [visible2, setVisible2] = useState(false);








  const handleMouseMove2 = (e) => {



    const rect = e.currentTarget.getBoundingClientRect();
    setPosition2({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setVisible2(true);


  };

  const handleMouseLeave2 = () => {
    setVisible2(false);

   
  };


  return (
    <div className={`${styles.main} cursor-crosshair`} ref={ref}
  

     onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}>


               {visible ?
        <div
          className={styles.nevidljiviDiv}
          style={{
            left: position.x +10,
            top: position.y +145,
            opacity:[0,1],
            transition:2,
            
      
          }}
        > 


         </div>
      :''
    }



          <div className={`${styles.firstDiv}`}>
            <div>digital</div>
            <div>agency</div>

        </div>


      



         <motion.video    className={`${styles.video}`} 
            whileInView={{ opacity: 1, y: 0 }} 



        style={{
          width,
          height,
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
         
        }} 
        
        type="video/mp4" src={dj}  autoPlay loop muted>


          </motion.video> 

   







          <div  className={`${styles.secondDiv} cursor-move`}>

       
             <motion.div 
            
       initial={{ background:"#808080",borderRadius:".4em"}}
        whileInView={{ background:"#FFFFFF"}}
        transition={{ duration: 1.2,delay:1 }}
             >We develop <span style={{color:"#aaaa58"}}> smart</span>
           </motion.div>
            <motion.div
               initial={{ background:"#808080",borderRadius:".4em"}}
        whileInView={{ background:"#FFFFFF"}}
        transition={{ duration: 1.2,delay:1.3 }}
            >solutions for people, brands,</motion.div>
            <motion.div
               initial={{ background:"#808080",borderRadius:".4em"}}
        whileInView={{ background:"#FFFFFF"}}
        transition={{ duration: 1.2,delay: 1.6 }}
             >and <span style={{color:"#aaaa58"}}>digital</span> platforms.</motion.div> 


          </div>


           <Slider /> 

<div className={styles.imageDiv}
     onMouseMove={handleMouseMove2}
    onMouseLeave={handleMouseLeave2} 

>

                   {visible2 ?
        <motion.div 

          className={`${styles.nevidljiviDiv2}`}
          style={{
            left: position.x - 100,
            top: position.y + 90,
            opacity:[0,1],
            transition:5,
          }}

         initial={{  opacity: 0 ,scale : 0 }}
          whileInView={{  opacity:[ 1],scale : [0,1]}}

          transition={{
          repeat: 0,
          ease: "easeInOut",
          duration: .7,
        }}> 



     <motion.div
  animate={{ x: ['0%', '100%'] }}
  transition={{
    repeat: Infinity,
    duration: 30,
    ease: 'linear',
  }}
  style={{
    whiteSpace: 'nowrap',
    // display: 'inline-block',
  }}
>
 {Array.from({ length: 20 }).map((_, i) => (
      <span key={i} style={{ marginRight: '32px' }}>People, Brands</span>
    ))}

</motion.div>



         </motion.div>
      :''
    }
     




     <motion.img src={sto} alt=""


      initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}




      />





      <motion.img



      initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
     
      
      
      src={kamera} alt="" />

</div>




  

    </div>
  )
}

export default Home






