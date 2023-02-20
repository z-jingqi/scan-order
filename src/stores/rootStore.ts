import { createContext, useContext } from "react";
import indexStore from "./indexStore";
import orderStore from "./orderStore";

const rootStore = {
  indexStore: indexStore(),
  orderStore: orderStore(),
};

export const RootStoreContext = createContext(rootStore);

export const useStore = () => {
  return useContext<typeof rootStore>(RootStoreContext);
};

export default rootStore;
