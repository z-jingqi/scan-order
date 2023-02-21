// import React from "react";
import { View, ScrollView } from '@tarojs/components';
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../../../stores';
import CategoryItem from './CategoryItem';



const CategoryList: React.FC<{}> = () => {

  const { categoryStore } = useStore();
  const { categories } = categoryStore;

  return (
    <View>
      <ScrollView>
        {categories.map((category) => <CategoryItem key={category.id} category={category} />)}
      </ScrollView>
    </View>
  );
}

export default observer(CategoryList);