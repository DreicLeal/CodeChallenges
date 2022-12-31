import { useState } from "react";
import "./App.css";

export const App = () => {
  const [cards, setCards] = useState([
    { isRevealed: false, image: "random1", hiddenSide: "HIDDEN" },
    { isRevealed: false, image: "random1", hiddenSide: "HIDDEN" },
    { isRevealed: false, image: "random2", hiddenSide: "HIDDEN" },
    { isRevealed: false, image: "random2", hiddenSide: "HIDDEN" },
    { isRevealed: false, image: "random3", hiddenSide: "HIDDEN" },
    { isRevealed: false, image: "random3", hiddenSide: "HIDDEN" },
    { isRevealed: false, image: "random4", hiddenSide: "HIDDEN" },
    { isRevealed: false, image: "random4", hiddenSide: "HIDDEN" },
  ]);

  interface IFlipped {
    image: string;
  }

  const [flipped, setFlipped] = useState<IFlipped[]>([]);

  const handleFlip = (index: number) => {
    if (!cards[index].isRevealed) {
      const nCards = [...cards];
      nCards[index].isRevealed = !nCards[index].isRevealed;
      setCards(nCards);
      setFlipped([...flipped, { image: nCards[index].image }]);
    }
  };
  console.log(flipped)

  return (
    <div className="App">
      {cards.map(({ isRevealed, image, hiddenSide }, cardIndex) => (
        <div onClick={() => handleFlip(cardIndex)} key={cardIndex}>
          {isRevealed ? image : hiddenSide}
        </div>
      ))}
    </div>
  );
};
