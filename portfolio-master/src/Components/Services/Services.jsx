import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import {motion} from 'framer-motion';
// import Resume from './resume.pdf' pdf

const Services = () => {
  const transition = {duration : 1, type : 'spring'}
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simply dummy text of printing of printing Lorem
          <br />
          ispum is simply dummy text of printing
        </span>
        <a href="/" download><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* 첫 번쨰 카드 */}
        <motion.div
          initial={{left: "25%" }}
          whileInView={{ left: '14rem`' }}
          transition={transition}
         style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, xd"}
          />
        </motion.div>
        {/* 두 번쨰 카드 */}
        <motion.div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, React"}
          />
        </motion.div>
        {/* 세 번쟤 카드 */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ispum dummy text are usually use in section where"}
          />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
