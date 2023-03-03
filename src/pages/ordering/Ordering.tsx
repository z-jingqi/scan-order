import React from "react";
import { View } from "@tarojs/components";
import { observer } from "mobx-react";
import { CategoryList, ProductGroupList, ShoppingCart } from "./components";

import "./Ordering.scss";
import { ProductDetail } from "../../components";
/**
 *
 */
const Ordering: React.FC<{}> = () => {
  return (
    <View className='ordering-container'>
      <View className='ordering-list'>
        <View className='ordering-category-list'>
          <CategoryList />
        </View>
        <View className='ordering-product-list'>
          <ProductGroupList />
        </View>
      </View>
      <View className='shopping-cart'>
        <ShoppingCart />
      </View>
    </View>
  );
};

export default observer(Ordering);
