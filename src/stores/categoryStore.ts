import { action, makeAutoObservable, observable } from "mobx";
import { categories } from "../mocks/categories";
import { Category } from "../schema";

class CategoryStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable categories: Category[] = categories;
  @observable selectedCategoryId: string;

  @action
  selectCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
  }
}

export default CategoryStore;
