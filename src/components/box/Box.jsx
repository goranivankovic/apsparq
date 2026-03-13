import styles from '../../styles/box/box.module.css';
import React from 'react'

function Box({slicica,order1,order2,stranaT,bojaP,bojaT,txt}) {
  return (
    <div className={styles.box}>



        <img src={slicica} alt="" style={{order: order1}} />

        <div className={styles.boxeText} style={{background:bojaP,color:bojaT,order: order2}} >

            <div className={styles.firstText} style={{justifySelf: stranaT}}>
                <div>BRANDING</div>
                <div>ENGINEERING</div>
                <div>PRODUCT DESIGN</div>
                <div>DESIGN SYSTEM</div>

            </div>



           <div className={styles.secondText}>
           {txt}
           </div>


        </div>



        





    </div>
  )
}

export default Box