import styles from '../../styles/marketing/marketing.module.css';

import { useRef, useState } from "react";

import Box from '../box/Box';

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import AnimateText from "../animateText/AnimateText";

import slika2 from '../../assets/ljudi2.jpg';
import slika3 from '../../assets/ljudi3.jpg';
import olovka from '../../assets/olovka.jpg';
import olovka2 from '../../assets/olovka2.jpg';

import Slika from '../slika/Slika';


function Marketing({ boolLaz1, boolLaz2 }) {


  // =====================================================
  // TEXT LINES
  // =====================================================

  const textLines = [
    "We've perfected the way to",
    "consistently design and launch",
    "best-in-class digital products.",
  ];


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

      x:
        e.clientX - rect.left,

      y:
        e.clientY - rect.top - 100

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

      x:
        e.clientX - rect.left,

      y:
        e.clientY - rect.top - 100

    });

    setVisible2(true);

  };


  const handleMouseLeave2 = () => {

    setVisible2(false);

  };


  // =====================================================
  // TEXT ZOOM SECTION
  // =====================================================

  const textSectionRef = useRef(null);


  const {
    scrollYProgress: textProgress
  } = useScroll({

    target: textSectionRef,

    offset: [
      "start end",
      "end start"
    ]

  });


  // =====================================================
  // TEXT SCALE
  // =====================================================

  const bigTextScale = useTransform(

    textProgress,

    [
      0,
      0.25,
      0.50,
      0.82
    ],

    [
      0.9,
      1,
      4,
      7
    ]

  );


  // =====================================================
  // TEXT OPACITY
  // =====================================================

  const bigTextOpacity = useTransform(

    textProgress,

    [
      0.15,
      0.25,
      0.65,
      0.82
    ],

    [
      0,
      1,
      1,
      0
    ]

  );


  // =====================================================
  // TEXT Y
  // =====================================================

  const bigTextY = useTransform(

    textProgress,

    [
      0.15,
      0.30
    ],

    [
      80,
      0
    ]

  );


  return (

    <div

      className={styles.main}

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
              position.y + 80,

            opacity: 1,

            transition:
              "opacity .2s ease"

          }}

        />

      )}


      {/* =================================================
          DIGITAL MARKETING
      ================================================= */}

      {boolLaz1 ? (

        <>


          {/* =================================================
              FIRST DIV
          ================================================= */}

          <div

            className={styles.firstDiv}

            onMouseMove={handleMouseMove2}

            onMouseLeave={handleMouseLeave2}

          >


            <div
              className={styles.headline}
            >

              DIGITAL MARKETING

              (

              <span
                style={{
                  color: "#000000"
                }}
              >
                02
              </span>

              )

            </div>


            {/* =================================================
                SMALL BOX
            ================================================= */}

            <div
              className={styles.firstDivSmallBox}
            >

              {visible2 && (

                <div

                  className={
                    styles.nevidljiviDiv2
                  }

                  style={{

                    left:
                      position2.x - 200,

                    top:
                      position2.y - 70,

                    opacity: 1,

                    transition:
                      "opacity .2s ease"

                  }}

                />

              )}


              Our approach to digital marketing is rooted in
              market analysis and a deep understanding

            </div>


            {/* =================================================
                BIG BOX
            ================================================= */}

            <div
              className={`${styles.firstDivBigBOX} cursor-move`}
            >

              <div>

                Digital marketing is the heartbeat of
                modern business.

              </div>


              <div>

                In a world where most customers gather
                information and make decisions online,
                having a strong online presence is no longer
                a luxury – it’s a necessity.

              </div>


              <div>

                Digital marketing encompasses all the
                strategies and tools that help your brand
                connect with the right audience, build trust,
                and deliver measurable results.

              </div>

            </div>


          </div>


          {/* =================================================
              IMAGE
          ================================================= */}

          <Slika />


          {/* =================================================
              BIG TEXT ZOOM
          ================================================= */}

          <section

            ref={textSectionRef}

            className={
              styles.textZoomSection
            }

          >

            <div
              className={
                styles.textZoomSticky
              }
            >

              <motion.div

                className={
                  styles.textZoom
                }

                style={{

                  scale:
                    bigTextScale,

                  opacity:
                    bigTextOpacity,

                  y:
                    bigTextY

                }}

              >

                <div>
                  We've perfected the way to
                </div>

                <div>
                  consistently design and launch
                </div>

                <div>
                  best-in-class digital products.
                </div>

              </motion.div>

            </div>

          </section>


          {/* =================================================
              FOUR DIV
          ================================================= */}

          <div
            className={`${styles.fourDiv} cursor-cell`}
          >


            <motion.div

              initial={{

                opacity: 0,

                scale: 0.8,

                rotate: 20,

                y: 150

              }}

              whileInView={{

                opacity: 1,

                scale: 1,

                rotate: 0,

                y: 0

              }}

              transition={{

                duration: 0.8,

                ease: "easeOut"

              }}

            >

              Our approach to digital marketing is rooted
              in market analysis and a deep understanding
              of your business goals. We design campaigns
              that are not generic, but tailored to your brand
              and industry. This includes a mix of SEO
              optimization, advertising on Google and social
              media, email marketing, as well as creating
              content that captures attention and builds
              long-term customer relationships.

            </motion.div>


            <div>

              The advantage of digital marketing lies in
              its measurability – we know exactly how many
              people saw your ad, how many visited your
              website, and how many purchased your product.
              This way, every dollar invested brings clear
              value. Our team helps you be present where
              your customers are, stand out from the
              competition, and build a strong digital identity.

            </div>


          </div>


        </>

      ) : ""}


      {/* =====================================================
          SEO OPTIMIZATION
      ===================================================== */}

      {boolLaz2 ? (

        <>


          <div
            className={styles.fiveDiv}
          >

            <div
              className={styles.headline2}
            >

              SEO OPTIMIZATION

              (

              <span
                style={{
                  color: "#000000"
                }}
              >
                03
              </span>

              )

            </div>

          </div>


          {/* =================================================
              BOX 1
          ================================================= */}

          <Box

            slicica={olovka}

            order1={1}

            order2={2}

            stranaT={'flex-end'}

            bojaP={'#4AD2FF'}

            bojaT={'#FFFFFF'}

            txt={
              'SEO optimization is the process of adjusting your website to appear at the top of search results. When potential customers look for a product or service, they rarely go beyond the first page of Google. If you’re not there – you’re missing the chance to be noticed.'
            }

          />


          {/* =================================================
              BOX 2
          ================================================= */}

          <Box

            slicica={slika2}

            order1={2}

            order2={1}

            stranaT={'flex-end'}

            bojaP={'#000000'}

            bojaT={'#FFFFFF'}

            txt={
              'SEO covers multiple aspects: from technical optimization (loading speed, mobile responsiveness, security), to content optimization (keywords, text structure, meta descriptions), and building authority through quality backlinks and local SEO. Our team conducts a comprehensive analysis of your website and competitors.'
            }

          />


          {/* =================================================
              BOX 3
          ================================================= */}

          <Box

            slicica={olovka2}

            order1={1}

            order2={2}

            stranaT={'flex-end'}

            bojaP={'#bfbf8b'}

            bojaT={'#FFFFFF'}

            txt={
              'The true power of SEO lies in its sustainability. Unlike paid advertising, which disappears once the budget runs out, SEO continues to generate organic traffic and sales over time. It’s a long-term investment in the growth and credibility of your business. With our expertise, you’ll stay visible, competitive, and ahead of the curve online.'
            }

          />


          {/* =================================================
              BOX 4
          ================================================= */}

          <Box

            slicica={slika3}

            order1={2}

            order2={1}

            stranaT={'flex-end'}

            bojaP={'#4a4a4a'}

            bojaT={'#FFFFFF'}

            txt={
              'The benefit of SEO is that it delivers long-term results. Unlike paid ads that stop working the moment you stop paying, SEO allows you to organically attract visitors and increase sales. It’s an investment in the future of your brand. We help you stay visible, relevant, and competitive online.'
            }

          />


        </>

      ) : ""}


    </div>

  );

}


export default Marketing;