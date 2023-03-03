import { View } from "@tarojs/components";
import React from "react"
import { Combo } from "../../schema"
import ComboGroup from "./ComboGroup";

interface Props {
  combo: Combo
}

const ComboProduct: React.FC<Props> = (props) => {
  const { combo } = props;
  const { comboGroups } = combo;

  return (
    <View>
      {comboGroups.map(group => <ComboGroup key={group.id} comboGroup={group} />)}
    </View>
  );

}

export default ComboProduct;