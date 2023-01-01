import { createContext, ReactNode, useState } from "react";


interface iCardProviderProps {
    children: ReactNode;
  }

  interface iCards {
    isRevealed: boolean;
    image: string;
    hiddenSide: string;
  }
  


  interface iCardContext {
    cards: iCards[]
  }
export const CardContext = createContext({} as iCardContext)

export const CardsProvider = ({children}: iCardProviderProps) => {
     const [cards, setCards] = useState(
        [
          { isRevealed: false, image: "random1", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random1", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random2", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random2", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random3", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random3", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random4", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random4", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random5", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random5", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random6", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random6", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random7", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random7", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random8", hiddenSide: "HIDDEN" },
          { isRevealed: false, image: "random8", hiddenSide: "HIDDEN" },
        ].sort(() => Math.random() - 0.5)
      );    

      return (
        <CardContext.Provider value={{cards}}>
            {children}
        </CardContext.Provider>
      )
}