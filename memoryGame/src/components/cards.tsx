import { useContext, useEffect, useState } from "react";
import { CardContext, iCard } from "../Providers/CardContext";


export const Card = ( elem:any, key:number) => {
  console.log(elem)
  const [clicked, setClicked] = useState<string[]>([]);
  const { cards, setCards } = useContext(CardContext);
  
  const check = (clicked: any) => {

    setClicked(clicked.image);

  };
  
  
  const handleFlip = (index: number) => {
    const nCards = [...cards];
    if (!cards[index].isRevealed) {
      nCards[index].isRevealed = true;
      setCards(nCards);
     check(nCards[index])
      
    }
  };

  return (
    <p onClick={() => handleFlip(key)} className="card">
      {elem.isRevealed
        ? elem.image
        : elem.hiddenSide}
    </p>
  );
};
