import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";
import { FaWarehouse, FaSearch, FaBook, FaPlus, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

export default function Navbar({hidden}) {
  return (
    <div className={`container-fluid ${hidden?"hide-it":""}`}>
      <div className="row">
        <div className="Navbar-list">
          <div className="navBar">
            <ul className="list-unstyled ">
              <li className="d-flex align-items-center">
                <Link to="/" className="home">
                  <FaWarehouse /> Home
                </Link>
              </li>
              <li className="d-flex align-items-center">
                <Link to="/Search" className="search">
                  <FaSearch /> Search
                </Link>
              </li>
            </ul>
          </div>

          <div className="library-sec">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center justify-content-between">
                <span className="library-icon">
                  <FaBook /> <span className="library-title">Your Library</span>
                </span>
                <span className="plus-icon">
                  <FaPlus />
                </span>
              </li>
            </ul>

            <div className="scroll-sec d-grid">
              <div className="playlist-1">
                <h2>Create your first playlist</h2>
                <span className="d-block">It's easy, we'll help you</span>
                <button type="button" className="playlist-btn">
                  Create Playlist
                </button>
              </div>
              <div className="playlist-2  ">
                <h2>Let's find some podcasts to follow</h2>
                <span className="d-block">
                  We'll keep you updated on new episodes
                </span>
                <button type="button" className="playlist-btn">
                  Create Playlist
                </button>
              </div>
            </div>

            <div className="nav-list">
              <ul className="list-unstyled d-flex flex-wrap">
                <li>Legal</li>
                <li>Privacy Center</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>About Ads</li>
                <li>Accessibility</li>
                <li>Cookies</li>
              </ul>
              <button type="button" className="lang-btn">
                <FaGlobe /> English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
