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
import { ease } from "../../animationVariants/bannerVariants";

const testimonials = [
  {
    name: "Jason Nelson",
    role: "Photographer, Forbes Magazine",
    image: image1,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ab officiis delectus aliquid molestias ullam dolores nostrum quisquam, vero facilis.",
  },
  {
    name: "Jessica ",
    role: "Designer, Vogue",
    image: image2,
    comment:
      "She's very good at her job and shows a lot of passion and dedication.",
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
      {/* <p className="title">What people say about me</p> */}
      <div className="testimonial">
        <motion.button
          whileHover={{
            boxShadow:
              activeIndex === testimonials.length - 1
                ? "1px 2px 20px rgba(0, 0, 0, 0.15)"
                : "",
            transition: {
              ease,
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
              activeIndex === 0 ? "1px 2px 20px rgba(0, 0, 0, 0.15)" : "",
            transition: {
              ease,
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
