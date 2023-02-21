import { Product } from "./product";

export interface ComboGroupItem {
  id: string;
  comboGroupId: string;
  comboId: string;
  productId: string;
  productName: string;
  productPrice: number;
  qty: number;
  storeId: string;
  product: Product;
  count?: number; // 点餐时选择的数量
}
