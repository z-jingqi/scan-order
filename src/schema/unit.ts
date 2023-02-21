export type UnitType = "normal" | "weight";

export interface Unit {
  id: string;
  name: string;
  type: UnitType;
  storeId: string;
}
