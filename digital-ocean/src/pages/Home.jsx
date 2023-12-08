import React from "react";
import Banner from "../components/banner/Banner";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <LeftSidebar />
      </div>
    </>
  );
};

export default Home;
