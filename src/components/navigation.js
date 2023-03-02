import "./Navigation.css";

import logo from "../assets/vodafone-logo-vector.png";
import user from "../assets/user.png";
import { Link, redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

function Navigation(props) {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  function handleSignout() {
    dispatch(setUser({}));
    redirect("/");
  }

  return (
    <header className="nav-header">
      <Link to={"/"}>
        <img src={logo} alt="Vodafone Logo" width={100} />
      </Link>

      <nav className="dropdown">
        <button
          className="img-button"
          onClick={
            currentUser.email
              ? props.setDropdownVisibility
              : props.handleLoginVisibility
          }
        >
          <img src={user} alt="user icon" width={25} height={25} />
          <span>Mein Vodafone</span>
        </button>

        <div
          className={`dropdown-content ${
            props.dropdownVisibility && "dropdown-open"
          }`}
        >
          <Link className="dropdown-content-link">Meine Aktivitäten</Link>
          <Link className="dropdown-content-link" onClick={handleSignout}>
            Logout
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
