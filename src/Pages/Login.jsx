import React from "react";
import "../Style/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loginHandle = async (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      try {
        const res = await axios.post("http://localhost:8080/auth/login", user);
        if (res.data.status === "Success") {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.user);
          setLoggedIn(true);
          navigate("/GrowWithUS");
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="outer">
        <form onSubmit={loginHandle} id="main">
          <h2>Login</h2>
          <div className="input-parent">
            <label htmlFor="username">Username</label>
            <input
              onChange={inputHandler}
              type="text"
              name="username"
              value={user.username}
            />
          </div>
          <div className="input-parent">
            <label htmlFor="password">Password</label>
            <input
              onChange={inputHandler}
              type="password"
              name="password"
              value={user.password}
            />
          </div>
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
