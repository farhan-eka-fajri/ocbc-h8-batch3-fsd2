// import './App.css';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import React from 'react'
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import About from "./pages/About"
import { Route, Routes } from "react-router-dom";


function App() {
  return (

    <div className="App">
        <div className="container">
          <Routes>
          <Route path='' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='content' element={<Todos/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
