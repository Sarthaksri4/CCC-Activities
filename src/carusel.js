import React, { useState } from "react";
import "./carusel.css";
// import image1 from './images/1.jpg'
// import image2 from './images/2.jpg'
// import image3 from './images/3.jpg'
import image4 from './images/4.jpeg'
import image5 from'./images/5.jpeg'
import image6 from './images/6.jpeg'
import image7 from './images/7.jpeg'
import image8 from'./images/8.jpeg'
import image9 from './images/9.jpeg'
import image10 from './images/10.png'
import Slider from "./Slider";

import { Link } from "react-router-dom";

const Carusel =() =>{
    const [i,seti]=useState(0);
    const [j,setj]=useState(1);
    const [k,setk]=useState(2);
    const Slidedata =[
      // {
      //   imgsrc:image1,
      //   content:"test1"
      // },
      // {
      //     imgsrc:image2,
      //     content:"test2"
      // },
      // {
      //     imgsrc:image3,
      //     content:"test3"
      //   },
        {
          imgsrc:image4,
          content:<>Quizard</>
          
        },
        {
          imgsrc:image5,
          content:<>A Recruitment Drive</>,
        
          path:'/new'
        },
        {
          imgsrc:image6,
          content:<>Workshop on Cloud<br />Essential & Linux</>,
          path:'/new3'

        },
        {
          imgsrc:image7,
          content:<>Workshop on Amazon<br />Web Services with Alexa</>,
          path:'/new4'
        },
        {
          imgsrc:image8,
          content:<>Workshop on Erudition</>
          
        },
        {
          imgsrc:image9,
          content:<>Workshop on CloudSplore</>,
          path:'/new6'


        },
        // {
        //   imgsrc:image10,
        
        // // },
       
    ]

    const prev=() =>{
      if(i===0)
      seti(Slidedata.length-1);
      else
      seti(i-1);

      if(j===0)
      setj(Slidedata.length-1);
      else
      setj(j-1);

      if(k===0)
      setk(Slidedata.length-1);
      else
      setk(k-1);
    };

    const next=() =>{
      if(i===Slidedata.length-1)
      seti(0);
      else
      seti(i+1);

      if(j===Slidedata.length-1)
      setj(0);
      else
      setj(j+1);

      if(k===Slidedata.length-1)
      setk(0);
      else
      setk(k+1);
  }
     return(
      <div>
        
        <section className="carusel">
            
            <h3>OUR WORKS</h3>
            <p> What we do!</p>

            <div className="slider">
            <button className="btn1" onClick={prev}>
                {/* <div className="bt1">
                  <p> Prev</p>
                </div> */}
            </button>
            
              <div className="slider1" >
                      <img src={Slidedata[i].imgsrc}/> 
                      <div className="ss1">{Slidedata[i].content}</div>
                    
            
              </div>

              <div className="slider2">
                      <Link to={Slidedata[j].path}><img src={Slidedata[j].imgsrc}/></Link>
                      <div className="ss">{Slidedata[j].content}</div>

              </div>

              <div className="slider3">
                      <img src={Slidedata[k].imgsrc }/>  
                      <div className="ss2">{Slidedata[k].content}</div>
              
              </div>

              <button className="btn2" onClick={next}>
            </button>
            </div>
        </section>
        {/* <br/>
        <div className="slideImage">
        <div className="slide active">
          <img src="3.jpg"alt=""/>
          <div className="info">
            <div className="sec">
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          </div>
        </div>
        <div className="slide">
          <img src="1.jpg" alt=""/>
          <div className="info">
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
        <div clasName="slide">
          <img src="2.jpg" alt=""/>
          <div className="info">
            <div className="sec1">p
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        </div>
        <div className="navigation">
          <div className="btn active" onClick={control(0)}></div>
          <div className="btn" onClick={control(1)}></div>
          <div className="btn" onClick={control(2)}></div>
        </div>
      </div> 
      </div>
              */}
             
   
  {/* <div className="container">
   <div className="box">
       <img src={image10} alt=""/>
   </div>
   </div> */}
   <Slider/>
   </div>
);}
export default Carusel;