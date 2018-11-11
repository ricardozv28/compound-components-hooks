import React from "react";
import ReactDOM from "react-dom";
import { Usage } from "./toggle";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Usage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
