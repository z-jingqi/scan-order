import { makeAutoObservable } from "mobx";

class IndexStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default IndexStore;
