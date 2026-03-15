

import styles from '../../styles/content/content.module.css';

import trikruga from '../../assets/trikruga.png'
import { useEffect } from 'react';


function Content() {




  return (
    <div className={styles.main}>






      <div className={styles.firstDiv}> 

         <div className={styles.headline}>CONTENT WRITER(<span style={{color:"#000000"}}>05</span>)</div>





               <div className={styles.firstDivText}> 

                  <div className={styles.firstDivTextItme1}>
                   <div>Builds community</div>
                   <div>In a time when audiences have endless options, </div>
                   <div>a content creator is essential for differentiation.</div>
                  </div>

                <div className={styles.firstDivTextItme2}>
                   <div>Written stories</div>
                   <div>To inspire audiences, empower brands, and shape digital products, through content that carries meaning, value, and emotion.</div>
                 
                   <div>They are the creators of a digital world where stories </div>
                   <div>are not only told, but lived</div>
                 </div>


               </div>


               <img src={trikruga} alt="" />



<div className={styles.secondDiv}> 

             <div className={styles.secondDivTextItme1}>
                   <div>Analyzes results</div>
                   <div>Their work is a blend of creativity, strategy, </div>
                   <div>and technology – and that combination makes the difference</div>
                   <div>between average and unforgettable content.</div>
              
                </div>

         </div>





      </div>

    
      
    </div>
  )
}

export default Content