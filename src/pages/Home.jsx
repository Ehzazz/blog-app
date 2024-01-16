import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Posts from "../components/posts/Posts";


const Home = () => {
  return (
    <>
    <div className="">
    <Header />
    </div>
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-full md:w-[75%]">
        <Posts />
      </div>
      <div className="hidden sm:flex w-full md:w-[25%] bg-gray-50">
        <Sidebar />
      </div>
    </div>
  </>
  );
};

export default Home;
