import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";

export const App = () => {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        stats: "",
      },
      {
        id: 1,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        stats: "",
      },
      {
        id: 2,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        stats: "",
      },
      {
        id: 2,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        stats: "",
      },
      {
        id: 3,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        stats: "",
      },
      {
        id: 3,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        stats: "",
      },
      {
        id: 4,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        stats: "",
      },
      {
        id: 4,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        stats: "",
      },
      {
        id: 5,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        stats: "",
      },
      {
        id: 5,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        stats: "",
      },
      {
        id: 6,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        stats: "",
      },
      {
        id: 6,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        stats: "",
      },
      {
        id: 7,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        stats: "",
      },
      {
        id: 7,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        stats: "",
      },
      {
        id: 8,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        stats: "",
      },
      {
        id: 8,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        stats: "",
      },
    ].sort(() => Math.random() - 0.5)
  );
  const [firstClicked, setFirstClicked] = useState(-1);

  const handleRestart = () => {
    items.map(item => item.stats = "")
    setItems([...items].sort(() => Math.random() - 0.5))
    setFirstClicked(-1)
  }
  

  return (
    <div className="App">
      <div className="header-container">
      <h1>Memory Game</h1>
      <button className="restart" onClick={()=>handleRestart()}>Restart</button>
      </div>
        <Cards items={items} setItems={setItems} firstClicked={firstClicked} setFirstClicked={setFirstClicked}></Cards>
    </div>
  );
};
