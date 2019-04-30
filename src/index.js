import React from "react";
import ReactDOM from "react-dom";
import CatPic from "./CatPic";
import Logo from "./Logo";
import Footer from "./Footer"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Logo style={{ position: "aboslute" }} />
      <CatPic />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
