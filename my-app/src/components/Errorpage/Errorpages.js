import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Errorpage.css";

export default function Errorpages() {
  return (
    <div className="error-page ">
      <i className="spot-icon pb-3">
        <FaSpotify></FaSpotify>
      </i>
      <h1 className="pb-2">Page not found</h1>
      <p className="pb-4">
        We can’t seem to find the page you are looking for.
      </p>
      <button type="button" className="Home-btn mb-4 ">
        <Link to="/" className="go-home">
          Home
        </Link>
      </button>
      <span>Help</span>
    </div>
  );
}
