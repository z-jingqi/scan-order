import { makeAutoObservable } from "mobx";

export interface OrderStore {}

class OrderingStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default OrderingStore;
