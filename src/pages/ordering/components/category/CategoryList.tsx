// import React from "react";
import { View, Text, ScrollView } from '@tarojs/components';
import { observer } from 'mobx-react';
import { useStore } from "../../../../stores";
import { CategoryItem } from './CategoryItem';


const CategoryList = () => {
  const { orderStore } = useStore();

  const { categories } = orderStore;

  return (
    <View>
      <ScrollView>
        {categories.map((category) => <CategoryItem key={category.id} category={category} />)}
      </ScrollView>
    </View>
  );
}

export default observer(CategoryList);