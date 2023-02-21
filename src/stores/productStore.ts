import { makeAutoObservable } from "mobx";
import { products } from "../mocks/products";
import { Product } from "../schema";

export interface ProductStore {
    products: Product[];
}

const productStore = () => {
    const store: ProductStore = {
        products: products
    };

    return makeAutoObservable(store);
};

export default productStore;
