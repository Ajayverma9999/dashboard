import React from "react";
import Contact from "../components/Contact";
import Grow from "../components/Grow";
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

const HomePage = ({setLoggedIn}) => {
  return (
    <>
      <div className="Home-container">
        <Sidebar setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/GrowWithUS" element={<Grow />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
};

export default HomePage;