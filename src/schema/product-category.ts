import { Category } from "./category";

export interface ProductCategory {
  id: string;
  productId: string;
  productName?: string;
  categoryId: string;
  categoryName?: string;
  categoryType?: string;
  storeId?: string;
  category?: Category;
}
