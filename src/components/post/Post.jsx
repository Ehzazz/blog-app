import React from "react";

const Post = () => {
  return (
    <div>
      <div className="md:w-[375px] sm:w-auto mt-0 mr-5 mb-20 ml-20 leading-relaxed">
        <div>
          <img
            className="w-[100%] md:h-[280px] sm:w-auto sm:h-[200px] bg-cover rounded-md"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=975&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-col text-center font-sans text-[12px] mt-15 mr-10 cursor-pointer ">
          <div className=" flex flex-wrap justify-center text-amber-700 mt-2">
            <h2 className="mr-5"> Music</h2>
            <h2>Life</h2>
          </div>
          <div>
            <h2 className=" font-bold text-[14px] mt-3 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elite.</h2>
          </div>
          <div>
            <h2 className=" justify-center text-amber-700">1 hour ago</h2>
          </div>
          <p className=" justify-center overflow-hidden text-ellipsis line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime
            velit voluptates molestias laboriosam. Recusandae nostrum est
            maiores culpa adipisci quaerat ipsam cumque ipsa eos, ea tempore
            quisquam praesentium ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime
            velit voluptates molestias laboriosam. Recusandae nostrum est
            maiores culpa adipisci quaerat ipsam cumque ipsa eos, ea tempore
            quisquam praesentium ut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime
            velit voluptates molestias laboriosam. Recusandae nostrum est
            maiores culpa adipisci quaerat ipsam cumque ipsa eos, ea tempore
            quisquam praesentium ut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime
            velit voluptates molestias laboriosam. Recusandae nostrum est
            maiores culpa adipisci quaerat ipsam cumque ipsa eos, ea tempore
            quisquam praesentium ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
