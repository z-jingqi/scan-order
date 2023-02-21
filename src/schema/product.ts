import { Combo } from "./combo";
import { ImageStore } from "./image-store";
import { Modifier } from "./modifier";
import { ProductCategory } from "./product-category";
import { Unit } from "./unit";

export type ProductStatus = "normal" | "disable" | "delete";

export type ProductType = "normal" | "combo";

export interface Product {
  id: string;
  name: string;
  createTime: number;
  code: string;
  combo: Combo;
  pinyin: string;
  price: number;
  status: ProductStatus;
  description: string;
  storeId: string;
  unitId: string;
  unit: Unit;
  indexNo: number;
  type: ProductType;
  modifiers: Modifier[];
  productCategory: ProductCategory[];
  images: ImageStore[];
  qty?: number; // 点餐数量
  note?: string; // 点餐时的备注
  imgError?: boolean;
}
