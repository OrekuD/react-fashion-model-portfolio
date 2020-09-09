import React from "react";
import "./Footer.scss";

const socials = ["instagram", "twitter", "linkedin"];

const Footer = () => (
  <footer>
    <div className="section">
      <p className="title">Social media</p>
      <div className="row">
        {socials.map((social, index) => (
          <div className="row" key={index}>
            <p className="link">{social}</p>
            {index !== socials.length - 1 && <div className="separator" />}
          </div>
        ))}
      </div>
    </div>
    <div className="section">
      <p className="title">Contact</p>
      <p className="link mail">hello@khalidaudrey.com</p>
    </div>
    <div className="section">
      <p className="title">Representation</p>
      <p className="link">BloomInc - France</p>
      <p className="link mail">jesse@bloom.com</p>
    </div>
  </footer>
);

export default Footer;
