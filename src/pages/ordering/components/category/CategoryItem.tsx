import { View, Text } from "@tarojs/components";
import React, { useEffect, useState } from "react"
import cx from 'classnames';
import { Category } from "../../../../schema";

import './CategoryItem.scss';
import { useStore } from "../../../../stores";

interface Props {
  category: Category
}

const CategoryItem: React.FC<Props> = (props) => {

  const { category } = props;

  const { categoryStore } = useStore();

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const isSelected = categoryStore.selectedCategoryId === category.id;
    setSelected(isSelected);
  }, [category.id, categoryStore.selectedCategoryId]);

  return (
    <View className={cx('category-item', selected && 'selected')}>
        <Text>{category.name}</Text>
    </View>
  );
}

export default CategoryItem;