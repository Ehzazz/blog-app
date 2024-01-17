import React from "react";

const Write = () => {
  return (
    <div className=" pt-12">
      <div className=" items-center flex flex-col">
        
          {/* <div className="h-[300px] w-auto ml-0  ">
            <img className="md:h-[280px] sm:h-[200px] rounded-md absolute md:w-full"
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=975&q=80"
              alt=""
            />
          </div> */}
          <div  className="md:h-[300px] w-auto ml-0">
          <img
            className=" w-full md:h-[280px] md:w-full sm:w-auto sm:h-[200px] bg-cover rounded-md"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=975&q=80"
            alt=""
          />
        </div>
          <label htmlFor="fileinput">
            <i className="fas fa-plus w-6 h-6 text-[20px] rounded-[50%] mt-2 border-slate-900"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} /> Add file
          <input className=" w-[70vw] p-2 border border-black flex items-center mb-3 text-[18px]" type="text" placeholder="Title" autoFocus={true} />
        
        <div>
          <textarea
            className=" w-[70vw] p-2 border border-black flex items-center text-[18px] "
            placeholder="Tell your story..."
            type="text"
          ></textarea>
        </div>
        <div>
          <button
            className="bg-blue-900 rounded-lg mt-2 hover:bg-blue-700 text-white w-[80px] h-10"
            type="button"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
