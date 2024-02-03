
import React, { useState } from 'react';
import '../Style/Sidebar.css';
import { Link } from "react-router-dom";
import logo from "../Assets/logo.webp"
import Login from './Login';


const Sidebar = () => {

  const [auth, setAuth] = useState(false)

  return (
    <div className="sidebar">
      <img src={logo} alt="" width={190} />
      {auth ?
        <ul>

          <li><Link to='/GrowWithUS' >Grow With US</Link></li>
          <li> <Link to='/contact' >Contact</Link></li>
          <li> <Link to='/Blog' >Blog</Link></li>
        </ul>
        : 
        <ul>
<li><Link to="/">Login</Link></li>
        </ul>
        }
    </div>
  );
};

export default Sidebar;
