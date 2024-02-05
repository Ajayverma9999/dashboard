import React from "react";
import "../Style/Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.webp";
import "../Style/Navbar.css";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = ({ setLoggedIn }) => {
  const [toggle, setToggle] = useState(false);

  function Click() {
    setToggle(!toggle);
  }
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoggedIn(false);
  };
  return (
    <div className="Navbar">
      <div className="Navbar_img">
        <Link to="/">
          <img src={logo} alt="" width={190} />
        </Link>
      </div>
      <div className="Navbar_menu">
        <ul className="">
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

        <div className="Mobile">
          <div className="Mobile_icon" onClick={Click}>
            <span>
              <IoMdMenu />
            </span>
          </div>

          <div className="Mobile_Menu">
            <ul className={` ${toggle ? "open" : "close"}`}>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
