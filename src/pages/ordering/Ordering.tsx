import React from 'react';
import { View } from '@tarojs/components';
import { observer } from 'mobx-react';
import { CategoryList, ProductGroupList } from './components';

import './Ordering.scss';
/**
 * 
 */
const Ordering: React.FC<{}> = () => {

  return (
    <View className='ordering-container'>
      <View className='ordering-category-list'>
        <CategoryList />
      </View>
      <View className='ordering-product-list'>
        <ProductGroupList />
      </View>
    </View>
  );
}

export default observer(Ordering)
