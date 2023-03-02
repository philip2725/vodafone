import "./Navigation.css";

import logo from "../assets/vodafone-logo-vector.png";
import user from "../assets/user.png";
import { Link, redirect } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

function Navigation(props) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  const ref = useRef(null);

  const dispatch = useDispatch();

  function handleSignout() {
    dispatch(setUser({}));
    toggleDropdown();
    redirect("/");
  }

  function toggleDropdown() {
    setDropdownVisibility((prevState) => !prevState);
  }

  useEffect(() => {
    const closeDropdown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        //close
        setDropdownVisibility(false);
      }
    };
    document.addEventListener("click", closeDropdown, true);
    return () => {
      document.removeEventListener("click", closeDropdown, true);
    };
  }, []);

  return (
    <header className="nav-header">
      <Link to={"/"}>
        <img src={logo} alt="Vodafone Logo" width={100} />
      </Link>

      <nav className="dropdown" ref={ref}>
        <button
          className="img-button"
          onClick={
            currentUser.email ? toggleDropdown : props.handleLoginVisibility
          }
        >
          <img src={user} alt="user icon" width={25} height={25} />
          <span>Mein Vodafone</span>
        </button>

        <div
          className={`dropdown-content ${
            dropdownVisibility && "dropdown-open"
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
