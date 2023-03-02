import { ComboGroupRule } from "./combo-group-rule";
import { ComboGroupItem } from "./combo-group-item";

export interface ComboGroup {
  id?: string;
  comboId?: string;
  productId?: string;
  name: string;
  comboGroupRule: ComboGroupRule;
  comboGroupItems: ComboGroupItem[];
  storeId?: string;
}
