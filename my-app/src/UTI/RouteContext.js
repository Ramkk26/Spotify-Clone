import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  // const location = useLocation();
  // console.log(location);
  const [currentRoute, setCurrentRoute] = useState("/");

  // useEffect(() => {
  //   setCurrentRoute(location.pathname);
  // }, [location.pathname]);

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRouteContext = () => {
  return useContext(RouteContext);
};
