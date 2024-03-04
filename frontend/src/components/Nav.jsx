import { useState } from "react";
import { Link } from "react-router-dom";
import patamon from "../assets/patamon.png";
import digivice from "../assets/digivice.png";

function Nav() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNav = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className={isClicked ? "nav" : "navbordernone"}>
      {isClicked ? (
        <button
          type="button"
          className="menu_patamon"
          onClick={() => toggleNav()}
        >
          <img src={patamon} alt="menu burger" />
        </button>
      ) : (
        <button
          type="button"
          className="menu_digivice"
          onClick={() => toggleNav()}
        >
          <img src={digivice} alt="close menu burger" />
        </button>
      )}

      {isClicked && (
        <ul>
          <li>
            <Link
              to="/home"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/scratchDigimon"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              ScratchDigimon
            </Link>
          </li>
          <li>
            <Link
              to="/digiCrush"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              DigiCrush
            </Link>
          </li>
          <li>
            <Link
              to="/collection"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Collections
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/commentSpace"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Comment Space
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                sessionStorage.removeItem("token");
                toggleNav();
              }}
              className="navbar-li"
            >
              Sign out
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;