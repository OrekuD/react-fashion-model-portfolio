import React from "react";
import "./Banner.scss";
import model from "../../assets/images/model-woman.jpg";
import { motion } from "framer-motion";
import { Arrow } from "../../svgs/Svgs";
import {
  containerVariant,
  nameVariant,
  descriptionVariant,
  buttonVariant,
  overlayVariant,
  imageVariant,
} from "../../animationVariants/bannerVariants";

const Banner = () => (
  <motion.div
    variants={containerVariant}
    initial="initial"
    animate="animate"
    className="banner"
  >
    <div className="content">
      <div>
        <div className="name-wrapper">
          <motion.p variants={nameVariant} className="name">
            <span>Audrey</span> Khaled
          </motion.p>
        </div>
        <motion.p variants={descriptionVariant} className="description">
          fashion model
        </motion.p>
      </div>
      <a href="#profile">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: {
              ease: "easeOut",
            },
          }}
          variants={buttonVariant}
          className="scroll-button"
        >
          <Arrow size={20} color="#ffffff" />
        </motion.div>
      </a>
    </div>
    <motion.div className="image">
      <motion.div className="overlay" variants={overlayVariant} />
      <motion.img variants={imageVariant} src={model} alt="Model" />
    </motion.div>
  </motion.div>
);

export default Banner;
