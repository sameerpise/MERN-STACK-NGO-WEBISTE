import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero"  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <div className="banner">
        <h1>Give Smiles</h1>
        <h3>Small Step Make Big differance</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          tenetur laborum incidunt dolore nisi quaerat dicta soluta? Beatae
          aliquid excepturi animi vel, provident nisi dolorem?
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner" data-aos="fade-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <img src="/boys-1283786_1280.jpg" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
