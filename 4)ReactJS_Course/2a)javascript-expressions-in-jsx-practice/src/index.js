import React from "react";
import ReactDom from "react-dom";

const name = "Serdar";
const currentYear = new Date().getFullYear();

ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
