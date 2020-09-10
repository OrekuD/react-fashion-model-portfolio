import React, { useState } from "react";
import "./Testimonials.scss";
import image1 from "../../assets/images/model-man.jpg";
import image2 from "../../assets/images/model-woman-2.jpg";
import { ArrowRight } from "../../svgs/Svgs";
import { motion, useAnimation } from "framer-motion";
import {
  imageVariant,
  textVariants,
} from "../../animationVariants/testimonialVariants";

const testimonials = [
  {
    name: "Jason Nelson",
    role: "Photographer, Forbes",
    image: image1,
    comment:
      "She loves her work and is very good at it. It's awesome to work with her.",
  },
  {
    name: "Jessica",
    role: "Designer, Vogue",
    image: image2,
    comment:
      "She's very good at her work and shows a lot of passion and dedication.",
  },
];

const Testimonials = () => {
  const animation = useAnimation();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const moveRight = async () => {
    if (activeIndex === testimonials.length - 1) {
      return;
    }
    animation.start("moveRight");
    await animation.start("fadeOut");
    setActiveIndex(activeIndex + 1);
    animation.start("fadeIn");
  };

  const moveLeft = async () => {
    if (activeIndex === 0) {
      return;
    }
    animation.start("moveLeft");
    await animation.start("fadeOut");
    setActiveIndex(activeIndex - 1);
    animation.start("fadeIn");
  };

  return (
    <div className="testimonials">
      <div className="testimonial">
        <motion.button
          whileHover={{
            boxShadow:
              activeIndex === testimonials.length - 1
                ? "1px 2px 20px rgba(128, 128, 128, 0.4)"
                : "",
            transition: {
              ease: "linear",
              duration: 0.5,
            },
          }}
          className="svg left"
          onClick={moveLeft}
        >
          <ArrowRight size={20} color="#c29590" />
        </motion.button>
        <motion.button
          whileHover={{
            boxShadow:
              activeIndex === 0 ? "1px 2px 20px rgba(128, 128, 128, 0.4)" : "",
            transition: {
              ease: "linear",
              duration: 0.5,
            },
          }}
          className="svg right"
          onClick={moveRight}
        >
          <ArrowRight size={20} color="#c29590" />
        </motion.button>
        <div className="image">
          {testimonials.map(({ name, role, image, comment }, index) => (
            <motion.img
              src={image}
              variants={imageVariant}
              animate={animation}
              alt={name}
              key={index}
            />
          ))}
        </div>
        <div className="content">
          <motion.p
            variants={textVariants}
            animate={animation}
            className="comment"
          >
            {testimonials[activeIndex].comment}
          </motion.p>
          <motion.p
            variants={textVariants}
            animate={animation}
            className="name"
          >
            {testimonials[activeIndex].name}
          </motion.p>
          <motion.p
            variants={textVariants}
            animate={animation}
            className="role"
          >
            {testimonials[activeIndex].role}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
