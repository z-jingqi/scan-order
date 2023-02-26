import { action, makeAutoObservable, observable } from "mobx";
import { Product } from "src/schema";

class ShoppingCartStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable shoppingCarts = [];

  @action
  addToCart(product: Product, qty: number) {}

  @action
  reduceFromCart(product: Product, qty: number) {}
}

export default ShoppingCartStore;