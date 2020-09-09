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
    name: "ghsjk asjhkl",
    role: "massal",
    image: image1,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ab officiis delectus aliquid molestias ullam dolores nostrum quisquam, vero facilis.",
  },
  {
    name: ";lodsl asjhkl",
    role: "slk",
    image: image2,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ab officiis delectus aliquid molestias ullam dolores nostrum quisquam, vero facilis.",
  },
];

const Testimonials = () => {
  const animation = useAnimation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const moveRight = async () => {
    if (activeIndex === 1) {
      return;
    }
    animation.start("moveRight");
    await animation.start("fadeOut");
    setActiveIndex(1);
    animation.start("fadeIn");
  };

  const moveLeft = async () => {
    if (activeIndex === 0) {
      return;
    }
    animation.start("moveLeft");
    await animation.start("fadeOut");
    setActiveIndex(0);
    animation.start("fadeIn");
  };

  return (
    <div className="testimonials">
      <div className="testimonial">
        <button className="svg left" onClick={moveLeft}>
          <ArrowRight size={20} color="#0000ff" />
        </button>
        <button className="svg right" onClick={moveRight}>
          <ArrowRight size={20} color="#0000ff" />
        </button>
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
