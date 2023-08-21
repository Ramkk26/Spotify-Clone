import { FaFacebook, FaSpotify, FaGoogle } from "react-icons/fa";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="">
        <span className="d-flex align-items-center gap-1 spotify-icon ">
          <FaSpotify></FaSpotify> <span className="spot">Spotify</span>
        </span>
      </div>
      <h3>Sign up for free to start listening.</h3>
      <h4 className="facebook-icon">
        <FaFacebook></FaFacebook>Sign up with Facebook
      </h4>
      <h4 className="google-icon">
        <FaGoogle></FaGoogle>Sign up with Google
      </h4>
      <span className="lines-after">or</span>
      <h5>Sign up with your email address</h5>

      <span className="font-14">What's your email?</span>
      <input
        type="text"
        placeholder="What's your email?"
        className="input-type"
      ></input>

      <span className="font-14">Create a password</span>
      <input
        type="text"
        placeholder="Create a password"
        className="input-type"
      ></input>
      <span className="font-14">What should we call you?</span>
      <input
        type="text"
        placeholder="Enter a profile name"
        className="input-type"
      ></input>
      <span className="font-14 ">What's your date of birth?</span>

      <div className="d-flex justify-content-between  align-items-center  ">
        <span>Month</span>
        <span>Day</span>
        <span>Year</span>
      </div>
      <div className=" d-flex justify-content-between align-items-center">
        <select placeholder="Month">
          <option></option>
          <option>Januvary</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>Decemebr</option>
        </select>
        <input type="text" placeholder="DD" className="Day"></input>
        <input type="text" placeholder="YYYY" className="year"></input>
      </div>
      <span className="pt-2 pb-2 font-14">What's your gender?</span>
      <div className="d-flex flex-wrap justify-content-between">
        <div>
          <input type="radio" id="male" value="male" />
          <label for="male" className="font-12">
            Male
          </label>
        </div>
        <div>
          <input type="radio" id="female" value="female" />
          <label for="female" className="font-12">
            Female
          </label>
        </div>
        <div>
          <input type="radio" id="non" value="non" />
          <label for="non" className="font-12">
            Non-Binary
          </label>
        </div>
        <div>
          <input type="radio" id="others" value="others" />
          <label for="others" className="font-12">
            Others
          </label>
        </div>
        <div>
          <input type="radio" id="not" value="not" />
          <label for="not" className="font-12">
            Prefer not to say
          </label>
        </div>
      </div>
      <div className="d-flex gap-2 pt-2 pb-3 fw-semi tick-box ">
        <input
          type="checkbox"
          id="reg"
          name="reg"
          value="reg"
          className="accent"
        />
        <label for="reg" className="font-12 mt-3">
          Share my registration data with Spotify's content providers for
          marketing purposes.
        </label>
      </div>
      <p className="font-10">
        By clicking on sign-up, you agree to Spotify's
        <a>
          <span className="color-green">Terms and Conditions of Use </span>
          <span>.</span>{" "}
        </a>
      </p>
      <p className="font-10">
        To learn more about how Spotify collects, uses, shares and protects your
        personal data,
        <a>
          <span className="color-green">
            {" "}
            please see Spotify's Privacy Policy
          </span>
          <span>.</span>
        </a>
      </p>

      <button type="button" className="register-signup">
        Sign up
      </button>

      <p className="text-center">
        Have an account?
        <a>
          <span className="color-green">Log in</span>
          <span>.</span>
        </a>
      </p>
    </div>
  );
}
