import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import telescope from "../../assets/telescope.png";
import teleShad from "../../assets/tele-shad-1.png";
import styles from "../../styles/HomeStyles.module.css";
import gsap from "gsap";

function OurVision() {
  const buttonRef2 = useRef(null);
  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());
  
  const handleSecondLMMouseEnter = () => {
    timeline.current.to(buttonRef2.current, {
      width: "160px",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef2.current, {
      width: "160px",
      background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
      duration: 1,
    });
    timeline2.current.play();
  };

  const handleSecondLMMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };


  return (
    <>
      <div className={styles.Home_our_vision_btn}>
        <p className={styles.Home_our_vision_text}>Our Vision</p>
      </div>

      <div className={styles.Home_our_vision_div}>
        <div className={`${styles.Home_our_vision_heading} mt-3`}>
          Pioneering Seamless Learning Excellence
        </div>
        <div className={styles.Home_our_vision_main}>
          At INNOVATIVE Quality Tech Limited, we envision a future where
          education seamlessly integrates with technology, fostering inclusivity
          and empowering individuals worldwide to unlock their full potential.
          Our commitment to innovation and excellence drives us to redefine
          educational standards, inspiring lifelong learners prepared to shape a
          brighter tomorrow.
        </div>
        <div
          className={styles.Home_our_vision_learn_more_btn}
          ref={buttonRef2}
          onMouseEnter={handleSecondLMMouseEnter}
          onMouseLeave={handleSecondLMMouseLeave}
        >
          <p className={styles.Home_our_vision_learn_more_text}>learn more</p>
        </div>
      </div>

      <div style={{ marginTop: "544px" }}>
        <div className={styles.Home_our_vision_img}>
          <div className={styles.Home_our_vision_main_image_bg}> </div>
          <img className={styles.Home_our_vision_main_image} src={telescope} alt="tele" />
        </div>

        <img className={styles.Home_our_vision_tele_shad_1} src={teleShad} alt="shad1" />
        <img className={styles.Home_our_vision_tele_shad_2} src={teleShad} alt="shad2" />
        <img className={styles.Home_our_vision_tele_shad_3} src={teleShad} alt="shad3" />
      </div>
    </>
  );
}

export default OurVision;