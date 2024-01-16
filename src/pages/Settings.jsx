import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { people02 } from "../assets";

const Settings = () => {
  return (
    <div className=" ml-5 flex mt-10">
      <div className="w-[75%]">
        <div className="flex justify-between mb-8">
          <h3 className=" text-3xl text-red-500 font-medium font-serif"> Update your account</h3>
          <h3 className="text-md font-medium font-serif  text-red-500">Delete your account</h3>
          
        </div>
        <div>
          <form className="flex" action="">
          
            <img src={people02} alt="" />
            <label htmlFor="fileinput">
              <i className="far fa-user-circle text-2xl text-red-500  ml-5 mt-7"></i> </label>
              <input type="file" id="fileinput" style={{display:"none"}} />
            
          </form>
        </div>
        <div className="flex flex-col mt-5">
          <label className=" font-serif mb-1" htmlFor="">Username</label>
          <input className=" border border-gray-500 w-[50%] mb-3" type="text" placeholder="Name" />
          <label className=" font-serif mb-1" htmlFor="">Email</label>
          <input className=" border  border-gray-500 w-[50%] mb-3" type="email" placeholder="Email" />
          <label className=" font-serif mb-1" htmlFor="">Password</label>
          <input className=" w-[50%] mb-3 border  border-gray-500 " type="Password" placeholder="Password" />
          <button className="bg-blue-900 rounded-lg hover:bg-blue-700 text-white w-[80px] h-10" type="button">Update</button>
        </div>
      </div>
      <div className="w-[25%]">
        <Sidebar/>
      </div>
    </div>
  );
};

export default Settings;
