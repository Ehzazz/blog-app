import React from "react";

const Write = () => {
  return (
    <div className=" pt-12">
      <div className="ml-[150px]">
        <div className=" items-center">
          <div className="h-[300px]  ">
            <img className="h-[280px] rounded-md absolute w-[70vw]"
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=975&q=80"
              alt=""
            />
          </div>
          <label htmlFor="fileinput">
            <i className="fas fa-plus w-6 h-6 text-[20px] rounded-[50%] border-slate-900"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" autoFocus={true} />
        </div>
        <div>
          <textarea
            className=" w-[70vw] p-2 border flex items-center text-[18px] "
            placeholder="Tell your story..."
            type="text"
          ></textarea>
        </div>
        <div>
          <button
            className="bg-blue-900 rounded-lg hover:bg-blue-700 text-white w-[80px] h-10"
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
