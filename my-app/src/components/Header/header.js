import "./Header.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header d-flex align-items-center justify-content-between">
      <div className="header-left d-flex align-items-center gap-3 ">
        <FaArrowLeft />
        <FaArrowRight />
      </div>
      <div className="header-right d-flex align-items-center  gap-4">
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
