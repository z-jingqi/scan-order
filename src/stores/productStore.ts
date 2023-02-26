import { makeAutoObservable, observable } from "mobx";
import { products } from "../mocks/products";
import { Product } from "../schema";


class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }
  @observable products: Product[] = products;
}

export default ProductStore;
