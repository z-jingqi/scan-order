import { View, Text, Button, Image } from "@tarojs/components";
import React, { useState } from "react";
import { Product } from "../../../../schema";

import defaultImage from "../../../../assets/default.jpg";

import "./ProductItem.scss";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = (props) => {
  const { product } = props;
  const [qty, setQty] = useState(0);

  const setProductQty = (productQty: number) => {
    const currentQty = qty ? qty : 0;
    productQty = productQty ? productQty : 0;
    const newQty = currentQty + productQty;
    setQty(newQty);
  };

  const AddButton = () => (
    <Button
      onClick={() => setProductQty(1)}
      className='qty-button add-button'
    />
  );

  const ReduceButton = () => (
    <Button
      onClick={() => setProductQty(-1)}
      className='qty-button reduce-button'
    />
  );

  const getButtonGroup = () => {
    if (!qty) {
      return <AddButton />;
    }
    return (
      <>
        <ReduceButton />
        <Text className='product-qty'>{qty}</Text>
        <AddButton />
      </>
    );
  };

  return (
    <View className='product-item'>
      <View className='product-image'>
        <Image mode='scaleToFill' src={defaultImage} />
      </View>
      <View className='product-info'>
        <Text className='product-name'>{product.name}</Text>
        <View className='tag-container'></View>
        <Text>{product?.description}</Text>
        <View className='spacer' />
        <View className='product-item-price'>
          <Text className='price-symbol'>¥</Text>
          <Text className='product-price'>{product.price}</Text>
          <View className='product-qty-wrapper'>{getButtonGroup()}</View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
