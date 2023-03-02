import "./Root.css";

import { useState } from "react";

import Authentication from "./Authentication";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

function Root() {
  const [loginVisibility, setLoginVisibility] = useState(false);

  function handleLoginVisibility() {
    setLoginVisibility(!loginVisibility);
  }

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
