import { useState } from "react";
import { Cards } from "./components/Cards";
import { cards } from "./database";
import { iItems } from "./interfaces";
import "./App.css"


export const App = () => {
  const [items, setItems] = useState<iItems[]>(
    cards.sort(() => Math.random() - 0.5)
  );
  const [firstClicked, setFirstClicked] = useState<number>(-1);

  const handleRestart = (items:iItems[]) => {
    items.map(item => item.stats = "")
    setItems([...items])
    items.map(item => item.stats = "active")
    setTimeout(()=> {
      items.map(item => item.stats = "")
      setItems([...items].sort(() => Math.random() - 0.5))
    },1200)
    setFirstClicked(-1)
  }
  

  return (
    <div className="App">
      <div className="header-container">
      <h1>Memory Game</h1>
      <button className="restart" onClick={()=>handleRestart(items)}>Restart</button>
      </div>
        <Cards items={items} setItems={setItems} firstClicked={firstClicked} setFirstClicked={setFirstClicked}></Cards>
    </div>
  );
};
