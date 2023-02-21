import { makeAutoObservable } from "mobx";
import { categories } from "../mocks/categories";
import { Category, Product } from "../schema";

export interface OrderStore {}

const orderingStore = () => {
  const store: OrderStore = {};

  return makeAutoObservable(store);
};

export default orderingStore;
