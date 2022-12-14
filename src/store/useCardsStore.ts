import create from "zustand";
import { combine } from "zustand/middleware";
import { constants } from "../../constants";
import { ICard } from "../../constants/dummyData";

const useCardsStore = create(
  combine(
    {
      // selected restuarant
      selectedCard: null as ICard | null,
    },
    (set) => ({
      setSelectedCard: (card: ICard) => set(() => ({ selectedCard: card })),
    })
  )
);

export default useCardsStore;
