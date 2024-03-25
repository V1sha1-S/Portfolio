import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDIv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <sapn>Hy! I Am</sapn>
          <span>Vishal S Naik</span>
          <span>
            Driven by curiosity, I thrive on challenges and continuous learning.
            With a blend of creativity and analytical thinking, I approach tasks
            with enthusiasm and precision
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icon">
          <a
            href="https://github.com/V1sha1-S"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishals-naik"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="" />
          </a>
          <a href="./">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesemoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="UI & UX" txt2="Designer" />
        </div>
        {/*  blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
