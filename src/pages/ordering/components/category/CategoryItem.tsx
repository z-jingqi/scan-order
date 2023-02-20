import { View } from "@tarojs/components";
import React from "react"
import { Category } from "../../../../schema"

interface Props {
  category: Category
}

export const CategoryItem: React.FC<Props> = (props) => {
  const { category } = props;
  return (
    <View>{category.name}</View>
  );
}