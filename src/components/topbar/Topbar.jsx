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
    <div className="w-full h-[50px] bg-white sticky top-0 z-50 ">
      <div className="flex  ">
        <div className="mt-6 flex w-[30%] justify-center">
          <i className="fa-brands fa-lg fa-square-facebook"></i>
          <i class=" ml-[10px] fa-lg fa-brands fa-instagram"></i>
          <i class=" ml-[10px] fa-lg fa-brands fa-square-twitter"></i>
          <i class=" ml-[10px] fa-lg fa-brands fa-square-pinterest"></i>
        </div>

        <div className="mt-3 flex w-[40%] justify-center">
          <ul className=" flex w-[60%] justify-between">
            <li
              className=" ml-[0px] cursor-pointer font-sans font-[18px]  "
              onClick={() => gotoHome()}
            >
              HOME
            </li>
            <li
              className=" ml-[20px] cursor-pointer font-sans font-[18px]  "
              onClick={() => gotoAbout()}
            >
              ABOUT
            </li>
            <li
              className=" ml-[20px] cursor-pointer font-sans font-[18px]  "
              onClick={() => gotoContact()}
            >
              CONTACT
            </li>
            <li
              className=" ml-[20px] cursor-pointer font-sans font-[18px]  "
              onClick={() => gotoWrite()}
            >
              WRITE
            </li>
            <li
              className=" ml-[20px] cursor-pointer font-sans font-[18px]  "
              onClick={() => gotoLogout()}
            >
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="mt-3 flex w-[30%] justify-center cursor-pointer">
          {user ? (
            <>
              <img
                className="w-[40px] "
                src={people02}
                alt=""
                onClick={() => gotoProfile()}
              />
              <i class=" mt-3 ml-10 fa-lg fa-regular fa-magnifying-glass"></i>
            </>
          ) : (
            <>
            <h2 className="mr-3" onClick={()=>gotoLogin()}>LOGIN</h2>
            <h2 onClick={()=>gotoRegister()}>REGISTER</h2>
             </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
