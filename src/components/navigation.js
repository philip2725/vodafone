import "./Navigation.css";

import logo from "../assets/vodafone-logo-vector.png";
import user from "../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

function Navigation(props) {
  const navigate = useNavigate();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  const ref = useRef(null);

  //used to send updates to redux store
  const dispatch = useDispatch();

  function handleSignout() {
    dispatch(setUser({}));
    toggleDropdown();
    navigate("/");
  }

  function toggleDropdown() {
    setDropdownVisibility((prevState) => !prevState);
  }

  //handles clicks outside of dropdown menu to close it when it is open
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
          <button
            className="dropdown-content-btn"
            onClick={() => {
              toggleDropdown();
              navigate("/myactivities");
            }}
          >
            Meine Aktivitäten
          </button>
          <button className="dropdown-content-btn" onClick={handleSignout}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
