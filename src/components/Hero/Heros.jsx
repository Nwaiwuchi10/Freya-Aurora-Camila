import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
// import css from "./Hero.module.scss";
import { motion } from "framer-motion";

// import "./Hero.css";
const Heros = () => {
  const phoneNumber = "+16462720134";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <section className={`paddings ${css.wrapper}`}>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Beatrice Charlotte Lee.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I am a Financial Consultant
            <br />
            And also an investment advisor
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:zainkeepscode@gmail.com">
          beatricecharlottelee@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">15</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED Financial Consultant</span>
            <span></span>
          </motion.div>
        </div>
      </motion.div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </section>
  );
};

export default Heros;
