import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { KeySkillInfoAction } from "../features/Key_Skills/KeySkills_features";

const Key_Skills = () => {
  const SkillsInput = useRef();
  const dispatch = useDispatch();
  const KeySkills = useSelector((store) => store.KeySkills);

  const AddedSkills = KeySkills.map((skill) => (
    <span key={skill.id}>
      <span className="p-2 m-2 ml-0 pl-0">
        {skill.text}
        <button>x</button>
      </span>
    </span>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(KeySkillInfoAction.Add(SkillsInput.current.value));
    SkillsInput.current.value = "";
  };
  return (
    <>
      <div
        className=" max-w-md mx-auto bg-white p-5 rounded-lg border-blue-400 border-solid border-2"
        id="undefined_Modal"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative z-0 w-full mb-5 group">
          <div className="block mb-2 text-xl font-medium text-black">
            <h1 className="title title-20-bold">Key skills</h1>
          </div>
          <h3 className="block font-light text-black pt-0 pl-0 pb-1 p-6">
            Recruiters look for candidates with specific key skills. Add them
            here to appear in searches.
          </h3>
        </div>
        <div className="text-left pl-3">Skills here:{AddedSkills}</div>
        <div className=" items-center m-3">
          <input
            ref={SkillsInput}
            type="text"
            className="bg-white border   text-sm rounded-lg  block w-full p-2.5 mb-3 text-black  shadow-md required"
          />
        </div>
        <br />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
          onClick={handleSubmit}
        >
          Save
        </button>{" "}
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 ">
          cancel
        </button>
      </div>
    </>
  );
};

export default Key_Skills;
