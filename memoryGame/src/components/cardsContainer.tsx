import { useContext, } from "react";
import { CardContext } from "../Providers/CardContext";
import { Card } from "./cards";



export const Cards = () => {
  const {cards} = useContext(CardContext);
  return (
    <div className="cardContainer">
      {cards.map((elem, cardIndex) => (
        <Card
          key={cardIndex}
          elem = {elem}
        />
      ))}
    </div>
  );
};
