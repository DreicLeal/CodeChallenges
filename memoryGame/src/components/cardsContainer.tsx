import { ReactComponentElement, useContext, useState } from "react";
import { CardContext } from "../Providers/CardContext";
import { Card } from "./cards";

export interface IFlipped {
  image: string;
  cardIndex: number;
  cards: ICards[];
  setCards: React.Dispatch<React.SetStateAction<ICards[]>>;
}

interface ICards {
  isRevealed: boolean;
  image: string;
  hiddenSide: string;
}

export const Cards = () => {
  const {cards, setCards} = useContext(CardContext);

  return (
    <div className="cardContainer">
      {cards.map(({ image }, cardIndex) => (
        <Card
          key={cardIndex}
          image={image}
          cards={cards}
          setCards={setCards}
          cardIndex={cardIndex}
        />
      ))}
    </div>
  );
};
