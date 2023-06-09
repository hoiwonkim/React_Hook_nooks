// ./index.js

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  // const potato = useRef();
  // // setTimeout(() => console.log(potato), 5000)
  // setTimeout(() => potato.current.focus(), 5000)
  const sayHello = () => console.log("say hello");
  const titile = useClick(sayHello);

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <input ref={potato} placeholder="la" /> */}
      <h1 ref={titile}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
