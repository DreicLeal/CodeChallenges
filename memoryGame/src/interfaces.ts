export interface iItems{
    id: number;
    image: string;
    stats: string;
    }
    
    export interface iProps{
      items: iItems[];
      setItems: React.Dispatch<React.SetStateAction<iItems[]>>;
      setFirstClicked: React.Dispatch<React.SetStateAction<number>>;
      firstClicked: number;
    }

    export interface iCardProp {
        item: iItems;
        id: number;
        handleClick(id:number): void;
      }