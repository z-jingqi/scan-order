import { makeAutoObservable } from "mobx";
import { Category, Product } from "../schema";

export interface OrderStore {
  categories: Category[];
  dishes: Product[];
}

const orderStore = () => {
  return makeAutoObservable<OrderStore>({
    categories: [],
    dishes: [],
  });
};

export default orderStore;
