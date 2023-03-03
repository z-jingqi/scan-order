import { View } from "@tarojs/components";
import React from "react";
import { ComboGroup } from "../../schema"
import ComboGroupItem from "./ComboGroupItem";

interface Props {
  comboGroup: ComboGroup;
}

const ComboProductGroup: React.FC<Props> = (props) => {
  const { comboGroup } = props;
  const { comboGroupRule, comboGroupItems } = comboGroup;

  return (
    <View>
      {comboGroupItems.map(item => <ComboGroupItem key={item.id} comboGroupItem={item} />)}
    </View>
  );
}

export default ComboProductGroup;