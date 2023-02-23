import { View, Text } from "@tarojs/components";
import React from "react";
import { ProductGroup } from "../../../../schema";
import ProductList from "./ProductList";

import "./ProductGroupItem.scss";

interface Props {
  group: ProductGroup;
}

const ProductGroupItem: React.FC<Props> = (props) => {
  const { group } = props;
  return (
    <View className='product-group-item'>
      <Text className='product-group-name'>{group.category.name}</Text>
      <ProductList products={group.products} />
    </View>
  );
}

export default ProductGroupItem;