import React from "react";

const Home = () => {
  return (
    <div className="main-container">
      <h1>Welcome,{localStorage.getItem("user")}</h1>
    </div>
  );
};

export default Home;
