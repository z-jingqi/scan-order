import { View } from "@tarojs/components";
import React from "react"
import { ComboGroupItem } from "../../schema"

interface Props {
  comboGroupItem: ComboGroupItem
}

const ComboProductGroupItem: React.FC<Props> = (props) => {
  const { comboGroupItem } = props;
  const { } = comboGroupItem;
  return (<View />);
}

export default ComboProductGroupItem;