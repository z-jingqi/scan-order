export type ComboGroupRuleType = "part" | "must";

export interface ComboGroupRule {
  id: string;
  comboGroupId: string;
  type: ComboGroupRuleType;
  maxCount: number;
  comboId: string;
  storeId: string;
}
