import { makeAutoObservable } from "mobx";
import { categories } from "../mocks/category";
import { Category } from "../schema";

export interface CategoryStore {
  categories: Category[];
  selectedCategoryId?: string;
}

const categoryStore = () => {
  const store: CategoryStore = {
    categories: categories,
    selectedCategoryId: "4",
  };

  return makeAutoObservable(store);
};

export default categoryStore;
