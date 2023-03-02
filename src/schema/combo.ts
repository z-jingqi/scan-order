import { ComboGroup } from "./combo-group";

export interface Combo {
  id?: string;
  productId?: string;
  totalPrice?: number;
  storeId?: string;
  comboGroups: ComboGroup[];
}
