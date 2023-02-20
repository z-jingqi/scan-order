import { makeAutoObservable } from "mobx";
import { Category, Dish } from "../schema";

export interface OrderStore {
  categories: Category[];
  dishes: Dish[];
}

const orderStore = () => {
  return makeAutoObservable<OrderStore>({
    categories: [],
    dishes: [],
  });
};

export default orderStore;
