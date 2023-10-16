import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home /> {/* add the <Home> component here */}
      <About /> {/* add your <About> component here */}
    </div>
  );
}

export default App;
