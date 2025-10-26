import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-Container">
        <img className="w-46" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link>Online Status:{onlineStatus ? "✅" : "🔴"}</Link>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/About"> About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery"> Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/Cart"> Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold px-4"> {data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
