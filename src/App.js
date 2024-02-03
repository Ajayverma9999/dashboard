// import React from 'react';
// import Home from './Home';
// import Login from './components/Login';
// import { Route, Routes } from 'react-router-dom';




// function App() {
//   return (
//     <div className="app-container">
//       <Routes>
//         <Route path="/" element={<Login/>} />
//         <Route path="/home" element={<Home/>} />
//        </Routes>


//     </div>);
// }

// export default App;
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Contect from './components/Contact.jsx';
import Grow from './components/Grow'
import { Route, Routes } from 'react-router-dom';

import Blog from './components/Blog.jsx';
import Login from './components/Login.jsx';


function Home() {


  return (


    <div className="Home-container">
      <Sidebar />

      <Routes>
          <Route path="/" element={<Login/>} />
          {/* <Route path="/home" element={<Sidebar/>} /> */}
          <Route path="/Contact" element={<Contect/>} />
          <Route path="/GrowWithUS" element={<Grow/>} />
          <Route path="/blog" element={<Blog/>} />
      </Routes>
    </div>

  );

}


export default Home;


