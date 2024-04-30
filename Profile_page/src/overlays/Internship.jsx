import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { IntershipInfo } from "../features/Intership_Info/Internship_Info.Slice";
const Internship = () => {
  const CompanyNameInput = useRef();
  const InternshipdurationInput = useRef();

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();

    const obj = {
      CompanyName: CompanyNameInput.current.value,
      Internshipduration: InternshipdurationInput.current.value,
    };

    dispatch(IntershipInfo.HandleInputForm(obj));
    (CompanyNameInput.current.value = ""),
      (InternshipdurationInput.current.value = "");
  };

  return (
    <>
      <form
        onSubmit={handlesubmit}
        className="max-w-md mx-auto bg-white p-5 rounded-lg border-blue-400 border-solid border-2"
      >
        <h1 className="block text-2xl font-bold text-black pt-0 pl-2 p-6">
          Internships
        </h1>
        <h3 className="block font-light text-black pt-0 pl-2 p-6">
          Show your professional learnings
        </h3>
        <div className="relative z-0 w-full mb-5 group">
          <label className="block mb-2 text-sm font-medium text-black ">
            Company Name
          </label>
          <input
            type="text"
            id="base-input"
            name=" Course Name"
            ref={CompanyNameInput}
            className="bg-white border   text-sm rounded-lg  block w-full p-2.5  text-black  shadow-md required"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="block mb-2 text-sm font-medium text-black ">
            Internship duration (MM/YY)
          </label>
          <input
            type="text"
            id="base-input"
            name=" Course Name"
            ref={InternshipdurationInput}
            className="bg-white border   text-sm rounded-lg  block w-full p-2.5  text-black  shadow-md required"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="block mb-2 text-sm font-medium text-black ">
            Project name
          </label>
          <input
            type="text"
            id="base-input"
            name=" Course Name"
            className="bg-white border   text-sm rounded-lg  block w-full p-2.5  text-black  shadow-md required"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="block mb-2 text-sm font-medium text-black ">
            Describe what you did at internship
          </label>
          <textarea
            name=""
            id=""
            cols="20"
            rows="6"
            className="bg-white  text-sm rounded-lg  block w-full p-2.5  text-black  shadow-md required border-slate-200 border-2"
          ></textarea>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-black "
          >
            Project URL (optional)
          </label>
          <input
            type="text"
            id="base-input"
            name="UniversityName"
            className="bg-white border text-sm rounded-lg  block w-full p-2.5  text-black  shadow-md required"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>{" "}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700"
        >
          cancel
        </button>
      </form>
    </>
  );
};

export default Internship;
