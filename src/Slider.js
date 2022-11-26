import React, { useEffect, useState } from "react";
import SliderContent from "./Slidercontent";
import Dots from "./Dots";
import Arrows from "./Arrow";
import sliderImage from "./sliderImage";
import "./Slider.css";
import image10 from './images/10.png'
import image1 from './images/s1.jpg'
import image2 from './images/s2.jpg'
import image3 from './images/s3.jpg'

const len = sliderImage.length - 1;
function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);
var slides = document.getElementsByClassName("slide");
// var btn = document.getElementsByClassName("navigation");
var dots=document.getElementsByClassName("btn");

  return (

    <div className="slider-container3">
      <div className="container3">
            <div className="box">
                <img src={image10} alt=""/>
            </div>
      </div>
      <div>
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </div>


    
  
  );
}

export default Slider;