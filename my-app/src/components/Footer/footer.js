import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className=" main-area ">
      <div className="container-fluid">
        <div className="row">
          <div className="footer-list d-flex justify-content-between">
            <ul class="list-unstyled text-color-white">
              <h3>Company</h3>
              <li><a href="#">About</a> </li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">For the Record</a></li>
            </ul>
            <ul class="list-unstyled text-color-white">
              <h3>Communities</h3>
              <li><a href="#">For Artists</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Adverstising</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Vendors</a></li>
              <li><a href="#">Spotify For workers</a></li>
            </ul>
            <ul class="list-unstyled text-color-white">
              <h3> Useful Links </h3>
              <li><a href="#">Support</a></li>
              <li><a href="#">Free Mobile App</a></li>
            </ul>
            <ul class="list-unstyled text-color-white d-flex gap-5">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
