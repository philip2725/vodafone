import "./Root.css";

import { useState } from "react";

import Authentication from "./Authentication";
import Navigation from "../components/Navigation";

function Root() {
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  function handleLoginVisibility() {
    setLoginVisibility(!loginVisibility);
  }

  return (
    <div
      className="App"
      onClick={() => {
        if (dropdownVisibility) {
          setDropdownVisibility(false);
        }
      }}
    >
      <Navigation
        handleLoginVisibility={handleLoginVisibility}
        dropdownVisibility={dropdownVisibility}
        setDropdownVisibility={setDropdownVisibility}
      />

      <Authentication
        visibility={loginVisibility}
        handleLoginVisibility={handleLoginVisibility}
      />
    </div>
  );
}

export default Root;
