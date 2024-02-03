import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Contect from './components/Contact.jsx';
import Grow from './components/Grow'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Blog from './components/Blog.jsx';
import Login from './components/Login.jsx';


function Home() {


  return (


    <div className="Home-container">
      <Sidebar />

      <Routes>
// <<<<<<< deepanshu
        <Route path="/home" element={<Dashboard/>} />
        <Route path="/Contact" element={<Contect/>} />
        <Route path="/GrowWithUS" element={<Grow/>} />
        <Route path="/blog" element={<Blog/>} />
// =======
//           <Route path="/" element={<Login/>} />
//           {/* <Route path="/home" element={<Sidebar/>} /> */}
//           <Route path="/Contact" element={<Contect/>} />
//           <Route path="/GrowWithUS" element={<Grow/>} />
//           <Route path="/blog" element={<Blog/>} />
// >>>>>>> main
      </Routes>
    </div>

  );

}


export default Home;


