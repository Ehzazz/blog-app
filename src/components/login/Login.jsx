import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
 
  const navigate = useNavigate();
  const gotoRegister = () => {
    navigate("/REGISTER");
  };
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1692198177609-15bebcef4181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=877&q=80";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    height: "100vh", // Adjust the height to cover the full viewport
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div className="flex flex-col bg-slate-100  bg-opacity-70 rounded-md p-5">
        <form className="flex flex-col" action="your-submit-url">
          <label className="font-serif " htmlFor="email">
            Email
          </label>
          <input className="border  border-gray-500 rounded-sm mb-3" type="text" id="email" placeholder="Enter Your Email" />
          <label className="font-serif  mt-3" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            className="border border-gray-500  mb-3"
          />
          <button
            className="bg-blue-900 mt-3 rounded-lg hover:bg-blue-700 text-white w-[80px] h-10"
            type="submit"
          >
            Login
          </button>
        </form>
       
        <div className="flex mt-5">
        <span>If you don't have account then.... </span>
          <button
            className="bg-blue-900 rounded-lg ml-5 hover:bg-blue-700 text-white w-[80px] h-8"
            type="button" onClick={()=>gotoRegister()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
