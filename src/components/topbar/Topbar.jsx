import React from "react";
import { people02 } from "../../assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };
  const gotoAbout = () => {
    navigate("/ABOUT");
  };
  const gotoWrite = () => {
    navigate("/WRITE");
  };
  const gotoLogout = () => {
    navigate("/LOGOUT");
  };
  const gotoContact = () => {
    navigate("/CONTACT");
  };
  const gotoProfile = () => {
    navigate("/Profile");
  };
  const gotoLogin = () => {
    navigate("/LOGIN");
  };
  const gotoRegister = () => {
    navigate("/REGISTER");
  };


  const user = false;

  return (
    <div className="w-full bg-white sticky top-0 z-50 ">
      <div className="flex flex-col sm:flex-row sm:w-full sm:mt-6 leading-relaxed   ">
        <div className="flex justify-center md:w-[30%] sm:mt-6 ">
          <i className="fa-brands fa-lg fa-square-facebook"></i>
          <i className="ml-2 fa-brands fa-lg fa-instagram"></i>
          <i className="ml-2 fa-brands fa-lg fa-square-twitter"></i>
          <i className="ml-2 fa-brands fa-lg fa-square-pinterest"></i>
        </div>
  
        <div className="flex justify-center md:w-[40%]  pt-3 sm:mt-0">
          <ul className="flex justify-between">
            <li
              className="cursor-pointer font-sans text-md ml-2 sm:ml-8"
              onClick={() => gotoHome()}
            >
              HOME
            </li>
            <li
              className="cursor-pointer font-sans text-md ml-2 sm:ml-8"
              onClick={() => gotoAbout()}
            >
              ABOUT
            </li>
            <li
              className="cursor-pointer font-sans text-md ml-2 sm:ml-8"
              onClick={() => gotoContact()}
            >
              CONTACT
            </li>
            <li
              className="cursor-pointer font-sans text-md ml-2 sm:ml-8"
              onClick={() => gotoWrite()}
            >
              WRITE
            </li>
            <li
              className="cursor-pointer font-sans text-md ml-2 sm:ml-8"
              onClick={() => gotoLogout()}
            >
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
  
        <div className="flex justify-center md:w-[30%] mt-2 pt-3 sm:mt-0 cursor-pointer">
          {user ? (
            <>
              <img
                className="w-10 h-10 mr-2"
                src={people02}
                alt=""
                onClick={() => gotoProfile()}
              />
              <i className="fa-lg fa-regular fa-magnifying-glass"></i>
            </>
          ) : (
            <>

            <button className="cursor-pointer ml-2 sm:ml-8 h-7 rounded-md  w-auto pt-0 p-1  bg-black w-18 text-white" onClick={() => gotoLogin()}>LOGIN</button>
            <button className="cursor-pointer ml-2 sm:ml-8 w-auto pt-0 p-1 h-7 rounded-md text-white bg-black" onClick={() => gotoRegister()}>REGISTER</button>
              
              
            </>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Topbar;
