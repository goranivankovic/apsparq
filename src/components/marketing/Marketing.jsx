import styles from '../../styles/marketing/marketing.module.css';

import { useRef,useState } from "react";

import Box from '../box/Box';


import slika2 from '../../assets/ljudi2.jpg'
import slika3 from '../../assets/ljudi3.jpg'
import olovka from '../../assets/olovka.jpg'
import olovka2 from '../../assets/olovka2.jpg'
import Slika from '../slika/Slika';


function Marketing({boolLaz1, boolLaz2}) {



  
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
      y: e.clientY - rect.top- 100,
    });
    setVisible2(true);


  };

  const handleMouseLeave2 = () => {
    setVisible2(false);

   
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


    



{

boolLaz1 ? <>

   




      <div className={styles.firstDiv}> 


        <div className={styles.headline}>DIGITAL MARKETING(<span style={{color:"#000000"}}>02</span>)</div>


      
        <div className={styles.firstDivSmallBox}
                    onMouseMove={handleMouseMove2}
    onMouseLeave={handleMouseLeave2} 
        >

             {visible2 ?
              <div
                className={styles.nevidljiviDiv2}
                style={{
                  left: position.x -250,
                  top: position.y  - 30,
                  opacity:[0,1],
                  transition:2,
                  
            
                }}
              > 
      
      
               </div>
            :''
          }
          
          
          Our approach to digital marketing is rooted in market analysis and a deep understanding</div>





        <div className={`${styles.firstDivBigBOX} cursor-move`}>

      
              

          <div>Digital marketing is the heartbeat of modern business.</div>
          <div> In a world where most customers gather information and make decisions online, having a strong online presence is no longer a luxury – it’s a necessity. </div>
          <div>Digital marketing encompasses all the strategies and tools that help your brand connect with the right audience, build trust, and deliver measurable results.</div>
          
           </div>






        </div>


             {/* <Slika /> */}
   

        




     <div className={styles.thrredDiv}>
      <div>We've perfected the way to</div>
      <div>consistently design and launch</div>
      <div>best-in-class digital products.</div>

      
     </div>


      <div className={` ${styles.fourDiv}  cursor-cell `}>

        <div> Our approach to digital marketing is rooted in market analysis and a deep understanding of your business goals. We design campaigns that are not generic, but tailored to your brand and industry. This includes a mix of SEO optimization, advertising on Google and social media, email marketing, as well as creating content that captures attention and builds long-term customer relationships. </div>

        <div>The advantage of digital marketing lies in its measurability – we know exactly how many people saw your ad, how many visited your website, and how many purchased your product. This way, every dollar invested brings clear value. Our team helps you be present where your customers are, stand out from the competition, and build a strong digital identity.</div>

      </div>

           
  </>
        

:"" }



{

boolLaz2 ?
<>



      <div className={styles.fiveDiv}>

            <div className={styles.headline2}>SEO OPTIMIZATION(<span style={{color:"#000000"}}>03</span>)</div>
            
           


      </div> 


<Box slicica={olovka} order1={1} order2={2} stranaT={'flex-end'} bojaP={'#4AD2FF'} bojaT={'#FFFFFF'}
txt={'SEO optimization is the process of adjusting your website to appear at the top of search results. When potential customers look for a product or service, they rarely go beyond the first page of Google. If you’re not there – you’re missing the chance to be noticed.'}

/>


 <Box slicica={slika2} order1={2} order2={1} stranaT={'flex-end'} bojaP={'#000000'} bojaT={'#FFFFFF'}
txt={'SEO covers multiple aspects: from technical optimization (loading speed, mobile responsiveness, security), to content optimization (keywords, text structure, meta descriptions), and building authority through quality backlinks and local SEO. Our team conducts a comprehensive analysis of your website and competitors.'}

/>


<Box slicica={olovka2} order1={1} order2={2} stranaT={'flex-end'} bojaP={'#bfbf8b'} bojaT={'#FFFFFF'}
txt={'The true power of SEO lies in its sustainability. Unlike paid advertising, which disappears once the budget runs out, SEO continues to generate organic traffic and sales over time. It’s a long-term investment in the growth and credibility of your business. With our expertise, you’ll stay visible, competitive, and ahead of the curve online.'}

/>


<Box slicica={slika3} order1={2} order2={1} stranaT={'flex-end'} bojaP={'#4a4a4a'} bojaT={'#FFFFFF'}
txt={'The benefit of SEO is that it delivers long-term results. Unlike paid ads that stop working the moment you stop paying, SEO allows you to organically attract visitors and increase sales. It’s an investment in the future of your brand. We help you stay visible, relevant, and competitive online.'}

/> 

</>

:""}



        
    </div>
  )
}

export default Marketing;