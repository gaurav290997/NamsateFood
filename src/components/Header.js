import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, Links } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-Container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link>Online Status:{onlineStatus ? "✅" : "🔴"}</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>{" "}
          </li>
          <li>
            <Link to="/About"> About Us</Link>
          </li>
          <li>
            <Link to="/Grocery"> Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
