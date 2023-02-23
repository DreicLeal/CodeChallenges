import { iCardProp } from "../interfaces";
import "./Card.css";

export const Card = ({ item, id, handleClick }: iCardProp) => {
  const itemStat = item.stats ? " active " + item.stats : "";
  return (
    <div className={"card" + itemStat} onClick={() => handleClick(id)}>
      <img src={item.image} alt="" />
    </div>
  );
};
