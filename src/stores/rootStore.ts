import { createContext, useContext } from "react";
import categoryStore from "./categoryStore";
import indexStore from "./indexStore";
import orderingStore from "./orderingStore";

const rootStore = {
  indexStore: indexStore(),
  orderingStore: orderingStore(),
  categoryStore: categoryStore(),
};

export const RootStoreContext = createContext(rootStore);

export const useStore = () => {
  return useContext<typeof rootStore>(RootStoreContext);
};

export default rootStore;
