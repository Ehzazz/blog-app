import React from "react";

const Singlepost = () => {
  return (
    <div>
      <div className="p-5 w-full leading-relaxed">
        <div>
          <img
            className="w-[100%] h-[300px] bg-cover mb-5 rounded-md"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=975&q=80"
            alt=""
          />
        </div>
        <div className="flex  flex-col font-serif text-[14px]  cursor-pointer ">
          <div className=" text-center pr-3">
            <h2 className=" font-bold  text-center text-[20px] pb-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elite.
              <i className="fa-solid fa-trash float-right ml-5 text-red-700"></i>
              <i className="fa-solid fa-edit float-right text-teal-700"></i>
            </h2>
          </div>
        </div>
        <div className="flex  flex-col font-serif text-[14px] pr-3  cursor-pointer">
          <div className=" ">
            <h2 className=" flex  text-amber-700 float-right">1 hour ago</h2>
            <h2 className="pl-4">
              Author : <span className=" font-semibold"> Azaz</span>
            </h2>
          </div>
        </div>
        <p className=" p-4 justify-center overflow-hidden font-serif  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime
          velit voluptates molestias laboriosam. Recusandae nostrum est maiores
          culpa adipisci quaerat ipsam cumque ipsa eos, ea tempore quisquam
          praesentium ut.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia maxime velit voluptates molestias laboriosam. Recusandae
          nostrum est maiores culpa adipisci quaerat ipsam cumque ipsa eos, ea
          tempore quisquam praesentium ut. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia maxime velit voluptates molestias
          laboriosam. Recusandae nostrum est maiores culpa adipisci quaerat
          ipsam cumque ipsa eos, ea tempore quisquam praesentium ut. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quia maxime velit
          voluptates molestias laboriosam. Recusandae nostrum est maiores culpa
          adipisci quaerat ipsam cumque ipsa eos, ea tempore quisquam
          praesentium ut.
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
