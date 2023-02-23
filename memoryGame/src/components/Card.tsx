import "./Card.css";
interface iCardProp {
  id: number;
  image: string;
  stat: string;
}
export const Card = ({ item, id, handleClick }: any) => {
  const itemStat = item.stats ? " active " + item.stats : "";
  return (
    <div className={"card" + itemStat} onClick={() => handleClick(id)}>
      <img src={item.image} alt="" />
    </div>
  );
};
