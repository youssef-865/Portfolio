import React, { useRef } from "react";
import "./Hero.css";
import devanimation from "./../../../public/animation/Animation - 1734114263963.json";
import Lottie from "lottie-react";
const myPhoto = "/Portfolio/portofolio.png";


export default function Hero() {
  const lottiref = useRef();

  return (
    <section id="hero" className="hero flex">
      <div className="left-section ">
        <div className="parent-avater flex">
          <img
            src={myPhoto}
            className="avater"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <h1
          animate={{
            scale: 2,
            transition: { duration: 2 },
          }}
          className="title"
        >
          Front-End Developer
        </h1>
        <p className="sub-title">
          Hi, I'm Youssef Mohy, a passionate front-end developer specializing in
          building modern and interactive web applications.
        </p>

        <div className="all-icons flex">
          {/* <div className="icon icon-x"></div>
          <div></div> */}

          <div className="all-icons">
            <a
              href="https://www.instagram.com/youssefmo7y_865/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ color: '#d4d4d8' }} className="icon icon-instagram" ></i>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/youssef-865"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ color: '#d4d4d8' }} className="icon icon-github"></i>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/youssef-mohy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ color: '#d4d4d8' }} className="icon icon-linkedin2"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="reight-section animation ">
        <Lottie
          lottieRef={lottiref}
          onLoadedImages={() => {
            lottiref.current.setSpeed(0.5);
          }}
          className="contact-animation"
          style={{ height: 355 }}
          animationData={devanimation}
        />
      </div>
    </section>
  );
}