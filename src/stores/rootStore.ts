import { createContext, useContext } from "react";
import CategoryStore from "./categoryStore";
import IndexStore from "./indexStore";
import OrderingStore from "./orderingStore";
import ProductStore from "./productStore";
import ShoppingCartStore from "./shoppingCartStore";

const rootStore = {
  indexStore: new IndexStore(),
  orderingStore: new OrderingStore(),
  categoryStore: new CategoryStore(),
  productStore: new ProductStore(),
  shoppingCartStore: new ShoppingCartStore(),
};

export const RootStoreContext = createContext(rootStore);

export const useStore = () => {
  return useContext<typeof rootStore>(RootStoreContext);
};

export default rootStore;
