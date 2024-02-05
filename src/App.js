import React, { useState } from "react";
import Login from "./Pages/Login.jsx";
import HomePage from "./Pages/HomePage.jsx";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  return (
    <>
      <div>
        {isLoggedIn && <Navbar setLoggedIn={setLoggedIn} />}
        {isLoggedIn ? (
          <HomePage setLoggedIn={setLoggedIn} />
        ) : (
          <Login setLoggedIn={setLoggedIn} />
        )}
      </div>
    </>
  );
}

export default Home;
