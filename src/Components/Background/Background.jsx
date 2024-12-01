import React from "react";
import "./Background.css";
import  vid1  from "../../assets/video1.mp4";
import  img1  from "../../assets/image1.jpg";
import  img2  from "../../assets/image2.jpg";
import  img3  from "../../assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video src={vid1} className= 'background fade-in' autoPlay loop muted>
        <source src={vid1} type = 'video/mp4' />  
      </video>
    )
  } 
  else if (heroCount === 0) {
    return <img src={img1} alt="" className="background fade-in" />;
  } 
  else if (heroCount === 1) {
    return <img src={img2} alt="" className="background fade-in" />;
  } 
  else if (heroCount === 2) {
    return <img src={img3} alt="" className="background fade-in" />;
  }
};

export default Background;
