import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navBar, mainBody, repos } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        ref={ref}
      />
      {repos.show && <Project heading={repos.heading} />}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <div className="appContainer">
      <BrowserRouter basename={"/"}>
        {navBar.show && <Navbar ref={titleRef} />}
        <Routes>
          <Route
            path="/projects/:projectId"
            exact
            element={<ProjectDetails ref={titleRef} title="projectDetails" />}
          />
          <Route path="/" exact element={<Home ref={titleRef} />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
