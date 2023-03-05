import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import Authentication from "./Authentication";
import Navigation from "../components/Navigation";
import "./Root.css";

function Root() {
  const [loginVisibility, setLoginVisibility] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  let location = useLocation();

  //toggle the Visibilty of the login window
  function handleLoginVisibility() {
    setLoginVisibility(!loginVisibility);
  }

  //when is user is not logged in he/she cannot access specific pages
  useEffect(() => {
    if (location.pathname === "/myactivities" && !currentUser.email) {
      setLoginVisibility(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, loginVisibility]);

  return (
    <div className="App">
      <Navigation handleLoginVisibility={handleLoginVisibility} />
      <Authentication
        visibility={loginVisibility}
        handleLoginVisibility={handleLoginVisibility}
      />
      <div className="outlet">
        {/* all Pages will be rendered inside the Outlet component */}
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
