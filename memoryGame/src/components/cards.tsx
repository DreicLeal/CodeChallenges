import { Card } from "./Card";

export const Cards = ({items, setItems, setFirstClicked, firstClicked}: any) => {

  const check = (current: any) => {
    if (items[current].id == items[firstClicked].id && items.indexOf(items[current]) !== items.indexOf(items[firstClicked])) {
      items[current].stats = "right";
      items[firstClicked].stats = "right";
      setItems([...items]);
      setFirstClicked(-1);
    } else {
      items[current].stats = "wrong";
      items[firstClicked].stats = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stats = "";
        items[firstClicked].stats = "";
        setItems([...items]);
        setFirstClicked(-1);
      }, 1000);
    }
  };

  const handleClick = (id: number) => {
    firstClicked == -1 ?
     (setFirstClicked(id),
     items[id].stats = "active",
     setItems([...items]),
     setFirstClicked(id)
     ): check(id);

  };

  return (
    <div className="container">
      {items.map((item:any, i:number) => (
        <Card item={item} key={i} id={i} handleClick={handleClick} />
      ))}
    </div>
  );
};
