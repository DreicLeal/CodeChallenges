import { ReactComponentElement, useContext, useState } from "react";
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
  const {cards} = useContext();
  // const [cards, setCards] = useState(
  //   [
  //     { isRevealed: false, image: "random1", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random1", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random2", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random2", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random3", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random3", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random4", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random4", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random5", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random5", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random6", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random6", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random7", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random7", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random8", hiddenSide: "HIDDEN" },
  //     { isRevealed: false, image: "random8", hiddenSide: "HIDDEN" },
  //   ].sort(() => Math.random() - 0.5)
  // );

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
