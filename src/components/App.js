import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home user={user}/>
      <About user={user}/>
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
