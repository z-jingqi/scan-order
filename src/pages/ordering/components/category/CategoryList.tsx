// import React from "react";
import { ScrollView } from '@tarojs/components';
import { AtTabs } from 'taro-ui';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useStore } from '../../../../stores';
import CategoryItem from './CategoryItem';

import './CategoryList.scss';

const CategoryList: React.FC<{}> = () => {

  const { categoryStore } = useStore();
  const { categories } = categoryStore;
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabList = categories.map(category => {
    return { id: category.id, title: category.name }
  })

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  }

  return (
    <AtTabs tabList={tabList} tabDirection='vertical' scroll current={currentIndex} onClick={(event) => handleClick(event)} />
    // <ScrollView className='category-list-scroll' showScrollbar={false} scrollY>
    //   {categories.map((category) => <CategoryItem key={category.id} category={category} />)}
    // </ScrollView>
  );
}

export default observer(CategoryList);