import React from "react";
import "./Slider.css";
import image1 from "./carousal1.jpg";


function Slider() {
  return (
    <div className="container-slider">     
      <div className="image-carousal">
        <img className="home-image" src={image1} alt="" />
      </div>      
    </div>
  );
}
export default Slider;
