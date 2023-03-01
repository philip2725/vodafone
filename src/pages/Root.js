import "./root.css";

import { useState } from "react";

import Authentication from "./Authentication";
import Navigation from "../components/navigation";

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
    </div>
  );
}

export default Root;
