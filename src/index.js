// ./index.js

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
