import React from 'react';
import '../Style/Login.css';
import { Link } from 'react-router-dom';




const Login = () => {
  return (
    <>
      <div className="outer">

        <form action="#!" id="main">
          <h2>Login</h2>
          <div class="input-parent">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="input-parent">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
             <Link to='/Home'>
            <button type="submit">Login</button>
            </Link>
        </form>
      </div>


    </>
  )
}

export default Login