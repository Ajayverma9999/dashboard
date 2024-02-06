import React from "react";
import Contact from "../components/Contact";
import Grow from "../components/Grow";
import Blog from "../components/Blog";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import AllBlogs from "../components/AllBlogs";
import Comments from "../components/Comments";

const HomePage = ({ setLoggedIn }) => {
  return (
    <>
      <div className="Home-container">
        <Sidebar setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Contact"
            element={<Contact setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/GrowWithUS"
            element={<Grow setLoggedIn={setLoggedIn} />}
          />
          <Route path="/blog" element={<Blog setLoggedIn={setLoggedIn} />} />
          <Route
            path="/blogs"
            element={<AllBlogs setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/comments"
            element={<Comments setLoggedIn={setLoggedIn} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default HomePage;
