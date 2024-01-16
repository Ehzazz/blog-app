import React from "react";
import { people02 } from "../../assets";
const Sidebar = () => {
  return (
    <div className="mt-0 pt-20 mb-10 w-full pr-6 b leading-relaxed bg-gray-50">
      <div className="flex flex-col items-center justify-between ">
        <div className="mt-5 mb-5 w-[50%] border-y-2 border-zinc-500 text-center">
          <h2 className=" font-medium font-serif "> ABOUT ME </h2>
        </div>
        <div>
          <img className=" mb-5" src={people02} alt="" />
        </div>
        <div className="w-full">
          <p className=" pl-5  text-center">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum
            asas dicta repellat placeat.
          </p>
        </div>
        <div className="mt-2 categories w-[50%] border-y-2 border-zinc-500 text-center">
          <h2 className=" font-medium font-serif">CATEGORIES</h2>
        </div>
        <div className="inline-block ">
          <ul className=" text-center  flex-row inline justify-between cursor-pointer w-[50%]">
            <li>Life</li>
            <li>Music</li>
            <li>Sports</li>
            <li>Tech</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="mt-5 mb-5 w-[50%] border-y-2 border-zinc-500 text-center">
          <h2 className="  font-serif "> FOLLOW US </h2>
        </div>
        <div className="mb-5 flex  justify-center cursor-pointer">
          <i className="fa-brands fa-m fa-square-facebook"></i>
          <i class=" ml-[10px] fa-m fa-brands fa-instagram"></i>
          <i class=" ml-[10px] fa-m fa-brands fa-square-twitter"></i>
          <i class=" ml-[10px] fa-m fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
