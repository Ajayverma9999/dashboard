
import React from 'react';
import '../Style/Sidebar.css';
import { Link } from "react-router-dom";
import logo from "../Assets/logo.webp"


const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="" width={190} />
      <ul>
        <li><Link to='/home' >Dashboard</Link></li>
        <li><Link to='/GrowWithUS' >Grow With US</Link></li>
        <li> <Link to='/contact' >Contact</Link></li>
        <li> <Link to='/blog' >Blog</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
