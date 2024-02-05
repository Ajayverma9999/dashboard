import React from "react";
import "../Style/Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.webp";

const Sidebar = ({ setLoggedIn }) => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoggedIn(false);
  };
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="" width={190} />
      </Link>
      <ul>
        <li>
          <Link to="/GrowWithUS">Grow With US</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <button
            style={{
              cursor: "pointer",
              fontSize: "16px",
              backgroundColor: "white",
              border: "none",
              outline: "none",
            }}
            onClick={logoutHandler}
          >
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
