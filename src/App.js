import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import Hero from "./components/Hero/Hero.js";
import Featured from "./components/Featured/Featured.js";
import SignUp from "./components/SignUp/SignUp.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Featured />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
