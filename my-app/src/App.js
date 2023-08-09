import "./App.css";
import "./Responsive.css";
import Navbar from "./components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/layout";

import { useLocation } from "react-router-dom";
import Search from "./components/Search/search";
import Register from "./components/Register/Register";
import Errorpages from "./components/Errorpage/Errorpages";
import SignupBar from "./components/SignupBar/SignupBar";
import { useState, useEffect } from "react";
function App() {
  let location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("/");

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const renderPage = () => {
    switch (currentRoute) {
      case "/":
        return <Layout setCurrentRoute={setCurrentRoute} />;
      case "/search":
        return <Search setCurrentRoute={setCurrentRoute}/>;
      case "/Register":
        return <Register />;
      default:
        return <Errorpages />;
    }
  };

  return (
    <section
      className={location.pathname !== "/Register" ? "Nav-section" : "register"}
    >
      <div className="side-bar">
        {location.pathname === "/Search" || location.pathname === "/" ? (
          <Navbar setCurrentRoute={setCurrentRoute} />
        ) : (
          ""
        )}
      </div>
      {location.pathname === "/Search" || location.pathname === "/" ? (
        <SignupBar />
      ) : (
        ""
      )}

      {renderPage()}
    </section>
  );
}

export default App;
