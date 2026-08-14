import styles from '../../styles/slika/slika.module.css';

import slika from '../../assets/ljudi.jpg';

import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion";

import { useState } from "react";


function Slika() {


  // =====================================================
  // MOUSE POSITION
  // =====================================================

  const [position2, setPosition2] = useState({
    x: 0,
    y: 0
  });

  const [visible2, setVisible2] = useState(false);


  // =====================================================
  // 3D MOTION VALUES
  // =====================================================

  const rotateX = useMotionValue(0);

  const rotateY = useMotionValue(0);

  const scale = useMotionValue(1);


  // =====================================================
  // SMOOTH SPRING
  // =====================================================

  const smoothRotateX = useSpring(
    rotateX,
    {
      stiffness: 180,
      damping: 20,
      mass: 0.6
    }
  );


  const smoothRotateY = useSpring(
    rotateY,
    {
      stiffness: 180,
      damping: 20,
      mass: 0.6
    }
  );


  const smoothScale = useSpring(
    scale,
    {
      stiffness: 200,
      damping: 20
    }
  );


  // =====================================================
  // MOUSE MOVE
  // =====================================================

  const handleMouseMove2 = (e) => {

    const rect =
      e.currentTarget.getBoundingClientRect();


    const x =
      e.clientX - rect.left;


    const y =
      e.clientY - rect.top;


    const centerX =
      rect.width / 2;


    const centerY =
      rect.height / 2;


    /*
       vrednost od -1 do 1
    */

    const normalizedX =
      (x - centerX) / centerX;


    const normalizedY =
      (y - centerY) / centerY;


    // =================================================
    // ROTATION
    // =================================================

    rotateY.set(
      normalizedX * 12
    );


    rotateX.set(
      -normalizedY * 12
    );


    // =================================================
    // SCALE
    // =================================================

    scale.set(1.035);


    // =================================================
    // MOUSE FOLLOWER
    // =================================================

    setPosition2({

      x,

      y: y - 100

    });


    setVisible2(true);

  };


  // =====================================================
  // MOUSE LEAVE
  // =====================================================

  const handleMouseLeave2 = () => {

    rotateX.set(0);

    rotateY.set(0);

    scale.set(1);

    setVisible2(false);

  };


  // =====================================================
  // RETURN
  // =====================================================

  return (

    <div

      className={styles.secondDiv}

      onMouseMove={handleMouseMove2}

      onMouseLeave={handleMouseLeave2}

      style={{
        perspective: 1200
      }}

    >


      {/* =================================================
          MOUSE FOLLOWER
      ================================================= */}

      {visible2 && (

        <div

          className={
            styles.nevidljiviDiv2
          }

          style={{

            left:
              position2.x + 60,

            top:
              position2.y - 30,

            opacity: 1,

            transition:
              "opacity .2s ease"

          }}

        />

      )}


      {/* =================================================
          IMAGE
      ================================================= */}

      <motion.img

        src={slika}

        alt=""

        initial={{
          opacity: 0,
          y: -150
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1.3
        }}

        style={{

          rotateX:
            smoothRotateX,

          rotateY:
            smoothRotateY,

          scale:
            smoothScale,

          transformPerspective: 1200,

          transformStyle:
            "preserve-3d"

        }}

      />


    </div>

  );

}


export default Slika;