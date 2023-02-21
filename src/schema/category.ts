export type CategoryType = "base" | "statistical" | "kitchenPrint";

export interface Category {
  id: string;
  name: string;
  type: CategoryType;
  storeId?: string;
  indexNo?: number;
  icon?: string;
}
