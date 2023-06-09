import React, { useEffect, useState } from "react";
import { render } from "react-dom";

// import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTile = document.querySelector("title");
    htmlTile.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdate = useTitle("Loading...");
  setTimeout(() => titleUpdate("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
