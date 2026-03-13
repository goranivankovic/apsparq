import styles from '../../styles/slider/slider.module.css';
import { animate  } from "motion";

import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

function Slider() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;

    if (track && container) {
      const trackWidth = track.offsetWidth;
      const containerWidth = container.offsetWidth;

      // Dupliraj sadržaj da popuni prostor
      track.innerHTML += track.innerHTML;

animate(track, { x: [`-${trackWidth / 2}px`, `0px`] }, {
  duration: 25,
  repeat: Infinity,
  easing: "linear"
});



    }
  }, []);

  return (

     <div className={styles.main}>


    <div className={styles.sliderContainer} ref={containerRef}>

         <div className={styles.textTrack} ref={trackRef}>
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i}>  DARE TO CHNAGE <FaArrowRight /> </span>
        ))}
      </div>

    </div>


   </div> 
  )
}

export default Slider