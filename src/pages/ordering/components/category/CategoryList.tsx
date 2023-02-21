// import React from "react";
import { ScrollView } from '@tarojs/components';
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../../../stores';
import CategoryItem from './CategoryItem';

import './CategoryList.scss';

const CategoryList: React.FC<{}> = () => {

  const { categoryStore } = useStore();
  const { categories } = categoryStore;

  return (
    <ScrollView className='category-list-scroll' showScrollbar={false} scrollY>
      {categories.map((category) => <CategoryItem key={category.id} category={category} />)}
    </ScrollView>
  );
}

export default observer(CategoryList);