import "./App.css";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import {HomeElement} from "./components/HomeElement";
 
function App() {
  
    return (
      <div className="App">
<Header/>
<div className="main-layout">
<HomeElement/>
</div>
      </div>
    );
 
}

export default App;
