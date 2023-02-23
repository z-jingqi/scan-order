import { Product } from "./product";

export interface ProductGroup {
  category: { id: string; name: string };
  products: Product[];
}
