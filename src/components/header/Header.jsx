import React from "react";
const Header = () => {
  return (
    <div className="w-full h-[440px] ">
      <div className="relative w-full mt-[60px]">
        <img
          className="mt-[80px] object-cover absolute  w-full h-[430px] "
          src="https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=828&q=80"
          alt="BCCDSS"
        />
        <div className="text-center flex-col relative z-10">
          <p className="text-[30px] text-red-300">React & Node</p>
          <p className="font-serif text-red-100 text-[100px]">Blog</p>
        </div>

        <div className="text-center absolute z-10">
          <p className="text-[24px] font-normal">hi how are you</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
