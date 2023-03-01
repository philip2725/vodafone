import "./navigation.css";

import logo from "../assets/vodafone-logo-vector.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <header className="nav-header">
      <Link to={"/"}>
        <img src={logo} alt="Vodafone Logo" width={100} />
      </Link>

      <nav>
        <button className="img-button" onClick={props.handleLoginVisibility}>
          <img src={user} alt="user icon" width={25} height={25} />
          <span>Mein Vodafone</span>
        </button>
      </nav>
    </header>
  );
}

export default Navigation;
