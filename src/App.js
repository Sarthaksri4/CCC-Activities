import React from "react";
// import {Routes,Route} from "react-router-dom";
import Carusel from "./carusel";
// import Slider from "./Slider";
import CardData from "./cardData";
import New from "./New";
import New3 from "./New3";
import New6 from "./New6";
import Card from "./Card";
import { Routes,Route,BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
        <Route path="/slider" exact element={<Carusel/>}/>
        <Route path="/new" exact element={<New/>}/>
        <Route path="/new3" exact element={<New3/>}/>
        <Route path="/new6" exact element={<New6/>}/>

    </Routes>
    </BrowserRouter>
      <div className="row">{CardData}</div>
  
    </>
  );
}

export default App
