import { ModifierOption } from "./modifier-option";

export type ModifierRule = "single" | "multi";

export class Modifier {
  id: string;
  name: string;
  productId: string;
  rule: ModifierRule;
  modifierOptions: ModifierOption[];
  storeId: string;
}
