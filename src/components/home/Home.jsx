import styles from '../../styles/home/home.module.css';

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import Slider from '../slider/Slider';

import { useRef, useState } from "react";

import sto from '../../assets/sto.jpg';
import kamera from '../../assets/tastatura.jpg';


function Home() {

  const [bg, setbg] = useState('#FFFFFF');


  // =====================================================
  // HERO VIDEO SCROLL
  // =====================================================

  const {
    scrollYProgress
  } = useScroll();

  const scale = useTransform(
    scrollYProgress,
    [0, 0.24],
    [1, 0]
  );


  // =====================================================
  // MOUSE EFFECT 1
  // =====================================================

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const [visible, setVisible] = useState(false);


  const handleMouseMove = (e) => {

    const rect =
      e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 100
    });

    setVisible(true);

  };


  const handleMouseLeave = () => {

    setVisible(false);

  };


  // =====================================================
  // MOUSE EFFECT 2
  // =====================================================

  const [position2, setPosition2] = useState({
    x: 0,
    y: 0
  });

  const [visible2, setVisible2] = useState(false);


  const handleMouseMove2 = (e) => {

    const rect =
      e.currentTarget.getBoundingClientRect();

    setPosition2({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    setVisible2(true);

  };


  const handleMouseLeave2 = () => {

    setVisible2(false);

  };


  // =====================================================
  // MOUSE EFFECT 3
  // =====================================================

  const [position3, setPosition3] = useState({
    x: 0,
    y: 0
  });

  const [visible3, setVisible3] = useState(false);


  const handleMouseMove3 = (e) => {

    const rect =
      e.currentTarget.getBoundingClientRect();

    setPosition3({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    setVisible3(true);

  };


  const handleMouseLeave3 = () => {

    setVisible3(false);

  };


  // =====================================================
  // PINNED IMAGE SECTION
  // =====================================================

  const sectionRef = useRef(null);


  const {
    scrollYProgress: imageProgress
  } = useScroll({

    target: sectionRef,

    offset: [
      "start start",
      "end end"
    ]

  });


  // =====================================================
  // RIGHT IMAGE ZOOM
  // =====================================================

  const imageScale = useTransform(

    imageProgress,

    [
      0,
      0.20,
      0.65,
      1
    ],

    [
      1,
      1,
      3.5,
      3.5
    ]

  );


  // =====================================================
  // LEFT IMAGE OPACITY
  // =====================================================

  const leftOpacity = useTransform(

    imageProgress,

    [
      0.20,
      0.45
    ],

    [
      1,
      0
    ]

  );


  // =====================================================
  // TEXT OPACITY
  // =====================================================

  const textOpacity = useTransform(

    imageProgress,

    [
      0.48,
      0.50
    ],

    [
      0,
      1
    ]

  );


  // =====================================================
  // TEXT POSITION
  // =====================================================

  const textY = useTransform(

    imageProgress,

    [
      0.48,
      0.50
    ],

    [
      40,
      0
    ]

  );


  // =====================================================
  // TEXT SCALE
  // =====================================================

  const textScale = useTransform(

    imageProgress,

    [
      0.48,
      0.50
    ],

    [
      0.98,
      1
    ]

  );


  // =====================================================
  // RETURN
  // =====================================================

  return (

    <div

      className={`${styles.main} cursor-crosshair`}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

    >


      {/* =================================================
          MOUSE FOLLOWER
      ================================================= */}

      {visible && (

        <div

          className={styles.nevidljiviDiv}

          style={{

            left:
              position.x + 10,

            top:
              position.y + 145,

            opacity: 1,

            transition:
              "opacity .2s ease"

          }}

        />

      )}


      {/* =================================================
          HERO TITLE
      ================================================= */}

      <div
        className={styles.firstDiv}
      >

        <div>
          digital
        </div>

        <div>
          agency
        </div>

      </div>


      {/* =================================================
          MOVING DIGITAL TEXT
      ================================================= */}

      {visible3 && (

        <motion.div

          className={styles.nevidljiviDiv2}

          style={{

            left:
              position.x - 100,

            top:
              position.y + 90

          }}

          initial={{

            opacity: 0,

            scale: 0

          }}

          animate={{

            opacity: 1,

            scale: 1

          }}

          transition={{

            duration: .7,

            ease:
              "easeInOut"

          }}

        >

          <motion.div

            animate={{

              x: [
                "0%",
                "100%"
              ]

            }}

            transition={{

              repeat:
                Infinity,

              duration:
                30,

              ease:
                "linear"

            }}

            style={{

              whiteSpace:
                "nowrap"

            }}

          >

            {Array
              .from({ length: 20 })
              .map((_, i) => (

                <span

                  key={i}

                  style={{
                    marginRight:
                      "32px"
                  }}

                >

                  Digital, Solutions

                </span>

              ))}

          </motion.div>

        </motion.div>

      )}


      {/* =================================================
          VIDEO
      ================================================= */}

      <motion.video

        className={styles.video}

        onMouseMove={handleMouseMove3}

        onMouseLeave={handleMouseLeave3}

        style={{
          scale
        }}

        autoPlay

        loop

        muted

        playsInline

        preload="auto"

      >

        <source
          src="/video2.webm"
          type="video/webm"
        />

        <source
          src="/video2.mp4"
          type="video/mp4"
        />

      </motion.video>


      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <div
        className={`${styles.secondDiv} cursor-move`}
      >

        <motion.div>

          We develop

          <span
            style={{
              color: "#aaaa58"
            }}
          >

            {" "}smart

          </span>

        </motion.div>


        <motion.div>

          solutions for people, brands,

        </motion.div>


        <motion.div>

          and

          <span
            style={{
              color: "#aaaa58"
            }}
          >

            {" "}digital

          </span>

          {" "}platforms.

        </motion.div>

      </div>


      {/* =================================================
          SLIDER
      ================================================= */}

      <Slider />


      {/* =================================================
          IMAGE SCROLL SECTION
      ================================================= */}

      <section

        ref={sectionRef}

        className={styles.imageSection}



      >


        {/* =================================================
            STICKY VIEWPORT
        ================================================= */}

        <div
          className={styles.imageSticky}
        >


        


          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <motion.div

            className={styles.leftImage}

            style={{

              opacity:
                leftOpacity

            }}

          >

            <motion.img

              src={sto}

              alt=""

              initial={{

                opacity: 0,

                y: 100

              }}

              whileInView={{

                opacity: 1,

                y: 0

              }}

              transition={{

                duration:
                  1.2

              }}

              viewport={{

                once: true

              }}

            />

          </motion.div>


          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <motion.div

            className={styles.rightImage}

            style={{

              scale:
                imageScale

            }}

          >

            <motion.img

              src={kamera}

              alt=""

              initial={{

                opacity: 0,

                y: -100

              }}

              whileInView={{

                opacity: 1,

                y: 0

              }}

              transition={{

                duration:
                  1.6

              }}

              viewport={{

                once: true

              }}

            />

          </motion.div>


          {/* =================================================
              TEXT
          ================================================= */}

          <motion.div

            className={styles.imageText}

            style={{

              opacity:
                textOpacity,

              y:
                textY,

              scale:
                textScale

            }}

          >

            <div
              className={
                styles.imageTextSmall
              }
            >

              DIGITAL EXPERIENCE

            </div>


            <h2>

              We create

              <br />

            digital  experiences

              <br />

              <span style={{color:"#ff8fa1"}}>that</span> move people.

            </h2>


            <p>

              Strategy, design and technology

              combined into one powerful

              digital experience.

            </p>

          </motion.div>


        </div>

      </section>


    </div>

  );

}


export default Home;