import "./Header.css";
import Navbar from "../Navbar/navbar";

import {
  FaArrowLeft,
  FaArrowRight,
  FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({setCurrentRoute}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="header d-flex align-items-center justify-content-between">
      <div className="header-left d-flex align-items-center gap-3 ">
        <FaArrowLeft />
        <FaArrowRight />
      </div>
      <div className="header-right d-flex align-items-center  gap-4">
        <span
          className="position-relative menubar"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FaBars />{" "}
        </span>

        <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
          <Navbar setCurrentRoute={setCurrentRoute} />
        </div>
        <span>
          <Link to="/Register">Sign up</Link>
        </span>
        <button type="button" className="log-btn">
          Log in
        </button>
      </div>
    </div>
  );
}
