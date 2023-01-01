import { useState } from "react";
import { IFlipped } from "./cardsContainer";

export const Card = ({ image, cards, setCards, cardIndex }: IFlipped) => {

    const [clicked, setClicked] = useState<string>("teste");

const check = (current: string) => {
    console.log(clicked)
if(clicked == current){
}
}

  const handleFlip = (index: number) => {
    if (!cards[index].isRevealed) {
      const nCards = [...cards];
      nCards[index].isRevealed = !nCards[index].isRevealed;
      setCards(nCards);
      const urlImg = cards[index].image
      setClicked(urlImg)
      check(cards[index].image)
    }
  };

  return (
    <p onClick={() => handleFlip(cardIndex)} className="card">
      {cards[cardIndex].isRevealed
        ? cards[cardIndex].image
        : cards[cardIndex].hiddenSide}
    </p>
  );
};
