import React, { useState, useEffect } from "react";

import Header from "../Header/header";
import Navbar from "../Navbar/navbar";
import SignupBar from "../SignupBar/SignupBar";
import "./Search.css";
import JsonData from "../json/music.json"
export default function Search() {
  const [data, setData] = useState([]);

  useEffect(() => {
 
    setData(JsonData);
  }, []);

  return (
    <>
      <Navbar hidden={true} />
      <div className="Header-tab">
        <Header />
        <div className="card-details Search-image">
          <div className="container-fluid">
            <div className="row gap-5 p-4 flex-wrap card-content-main ">
              {JsonData.map(item => (
                <div key={item.id} className={`col-lg-2 col-sm-12 col-md-6 card-content ${item.id}  `} style={{ backgroundColor: item.background_color }} >
                  <a href="music.html">
                    <h3 className="cardtitle">{item.headLine}</h3>
                    <img src={item.Url} alt="loading..." />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SignupBar />
    </>
  );
}
