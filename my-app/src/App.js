import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import Navbar from "./components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/layout";
import Search from "./components/Search/search";
import Register from "./components/Register/Register";
import Errorpage from "./components/Errorpage/Errorpage";
import SignupBar from "./components/SignupBar/SignupBar";

function App() {
  return (

      <section className="Nav-section">
     
 
          <Routes>
            <Route path="/" exact element={<Layout/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="*" element={<Errorpage/>} />
          </Routes>
      
      
      </section>
   
  );
}

export default App;
