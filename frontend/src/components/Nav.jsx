import { useState } from "react";
import { Link } from "react-router-dom";
import patamon from "../assets/patamon.png";
import digivice from "../assets/digivice.png";
import "../scss/Nav.scss";

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
          <img className="n-img-patamon" src={patamon} alt="menu burger" />
        </button>
      ) : (
        <button
          type="button"
          className="menu_digivice"
          onClick={() => toggleNav()}
        >
          <img
            className="n-img-digivice"
            src={digivice}
            alt="close menu burger"
          />
        </button>
      )}

      {isClicked && (
        <ul className="p-ul">
          <li className="p-li">
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
          <li className="p-li">
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
          <li className="p-li">
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
          <li className="p-li">
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
          <li className="p-li">
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
          <li className="p-li">
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
          <li className="p-li">
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
