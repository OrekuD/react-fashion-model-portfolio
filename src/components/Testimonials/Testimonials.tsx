import React from "react";
import "./Testimonials.scss";
import image1 from "../../assets/images/model-man.jpg";
import image2 from "../../assets/images/model-woman-2.jpg";

const testimonials = [
  {
    name: "ghsjk asjhkl",
    role: "massal",
    image: image1,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ab officiis delectus aliquid molestias ullam dolores nostrum quisquam, vero facilis.",
  },
  {
    name: "ghsjk asjhkl",
    role: "massal",
    image: image2,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ab officiis delectus aliquid molestias ullam dolores nostrum quisquam, vero facilis.",
  },
];

const Testimonials = () => (
  <div className="testimonials">
    <div className="testimonial">
      <div className="image">
        {testimonials.map(({ name, role, image, comment }, index) => (
          <img src={image} alt={name} key={index} />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
