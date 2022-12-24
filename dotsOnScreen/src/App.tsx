import { useState } from "react";
import "./App.css";
import { DotStyle } from "./style";
interface IclickedAxe {
  clientX: number;
  clientY: number;
}

export const App = () => {
  const [axe, setAxe] = useState<IclickedAxe[]>([]);
  const [toRedo, setToRedo] = useState<IclickedAxe[]>([]);

  const getCoordinates = ({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLElement>) => {
    setAxe([...axe, { clientX, clientY }]);
  };

  const handleUndo = () => {
    const nAxe = [...axe];
    const undoAxe = nAxe.pop();
    setAxe(nAxe);
    if (!undoAxe) return;
    setToRedo([...toRedo, undoAxe]);
  };

  const handleRedo = () => {
    const nToRedo = [...toRedo];
    const redo = nToRedo.pop();
    if (!redo) return;
    setToRedo(nToRedo);
    setAxe([...axe, redo]);
  };

  return (
    <>
      <button disabled={axe.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={toRedo.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className="App" onClick={getCoordinates}>
        {axe.map(({ clientX, clientY }, i) => {
          return <DotStyle key={i} top={clientY} left={clientX}></DotStyle>;
        })}
      </div>
    </>
  );
};
