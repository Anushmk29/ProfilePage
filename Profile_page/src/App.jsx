import Display_profile from "./components/Display_profile";

import EducationInfo from "./overlays/EducationInfo";
import "./App.css";
import About_You from "./overlays/About_You";
import Class12th from "./overlays/Class12th";
import Class10th from "./overlays/class10th";
import Key_Skills from "./overlays/Key_Skills";
import Internship from "./overlays/Internship";
import Cerification from "./overlays/Cerification";
import Projects from "./overlays/Projects";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Display_profile />
        <About_You />
        <EducationInfo />
        <Class12th />
        <Class10th />
        <Key_Skills />
        <Internship />
        <Cerification />
        <Projects />
      </Router>
    </>
  );
}

export default App;
