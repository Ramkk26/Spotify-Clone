import { Link } from "react-router-dom";
import "./Signup.css";
export default function SignupBar() {
  return (
    <div className=" signup-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="signbar col-lg-12 d-flex align-items-center justify-content-between">
            <div>
              <h3>Preview of Spotify</h3>
              <p>
                Sign up to get unlimited songs and podcasts with occasional ads.
                No credit card needed.
              </p>
            </div>
            <button type="button" className="signup-btn">
              <Link to="/Register">Sign up free</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
