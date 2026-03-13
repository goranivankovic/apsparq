
import styles from '../../styles/footer/footer.module.css';



function Footer() {
  return (
    <div className={styles.main}>


        <div className={styles.firstDiv}>
            <a href="https://www.instagram.com/" target='_blank'>INSTAGRAM</a>
             <a href="https://www.facebook.com/"  target='_blank'>FACEBOOK</a>

        </div>


             <div className={styles.secondDiv}>
            <a href="https://www.google.com/"  target='_blank'>GOOGLE</a>
             <a href="https://www.twitter.com/"  target='_blank'>TWITTER</a>

        </div>  



    </div>
  )
}

export default Footer;