import { createContext, useContext } from "react";
import categoryStore from "./categoryStore";
import indexStore from "./indexStore";
import orderingStore from "./orderingStore";
import productStore from "./productStore";

const rootStore = {
  indexStore: indexStore(),
  orderingStore: orderingStore(),
  categoryStore: categoryStore(),
  productStore: productStore()
};

export const RootStoreContext = createContext(rootStore);

export const useStore = () => {
  return useContext<typeof rootStore>(RootStoreContext);
};

export default rootStore;
