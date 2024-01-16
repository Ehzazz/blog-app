import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Posts from "../components/posts/Posts";


const Home = () => {
  return (
    <>
      <Header />
      <div className="flex w-full sm:flex-row">
        <div className="w-[75%] ">
          <Posts />
        </div>
        <div className="w-[25%] bg-gray-50">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
