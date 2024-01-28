import React, { useContext } from "react";
 import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hy! I Am</span>
          <span>Tarun Kumar</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}> */}
          <button className="button i-button">Hire me</button>
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
          

        

    </div>
    <div className="i-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      <img src={glassesimoji} alt="" />
      <div style={{top: '-4%', left: '68%'}}>
        <FloatingDiv image={crown} text1= 'web' text2='Developer'/>
      </div>
      <div style={{top: "18rem", left: "0rem" }}>
        <FloatingDiv image={thumbup} text1= "Best Design" text2="Award"/>
        {/* blur divs */}
        <div className="blur" style={{backgrund: "rgb(238 210 255"}}></div>
        <div className="blur" style={{
          background: '#C1F5FF',
          top: '17rem ',
          width: '21rem',
          height: '11rem',
          left: '-9rem'

        }}>

        </div>
      </div>
      </div> 
    </div> 
  ); 
} 

export default Intro;