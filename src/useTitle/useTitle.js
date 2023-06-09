import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTile = document.querySelector("title");
    htmlTile.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
