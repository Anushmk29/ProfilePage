import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="  flex flex-row justify-evenly bg-slate-100   w-full h-2/5 rounded-lg p-6 sticky ">
        <div className="  flex items-start">
          <div className="p-2">AMI Place</div>
          <div className="p-2"> Prepare</div>
          <div className="p-2">Participate</div>
          <div className="p-2">Opportunities</div>
          <div className=" p-2 rounded-full ">
            <input className="rounded-full" type="text" />
          </div>
          <div className="p-2">icon bell</div>
          <div className="p-2"> slider</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
