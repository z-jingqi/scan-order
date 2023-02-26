import { View, Button, Text } from "@tarojs/components";
import { useState } from "react";
import { useStore } from "../../../../stores";

import "./ShoppingCart.scss";

const Price = (props: { price: number }) => {
  const { price } = props;
  return (
    <View>
      <Text>¥</Text>
      <Text>{price}</Text>
    </View>
  );
};

const SimpleCart = (props: { count: number; price: number }) => {
  const { count, price } = props;

  return (
    <View className='simple-cart'>
      <View className='cart-price-info'>
        <View></View>
        {price && <Price price={price} />}
      </View>
      <View className='checkout-button'>
        <Button>结算</Button>
      </View>
    </View>
  );
};

const DetailCart = () => {
  return <View>detail</View>;
};

const ShoppingCart = () => {
  const { shoppingCartStore } = useStore();
  const { shoppingCarts } = shoppingCartStore;
  const [showDetail, setShowDetail] = useState(false);

  const count = shoppingCarts?.length ?? 0;

  const getTotalCost = () => {
    // TODO
    return 0;
  };

  return (
    <View className='shopping-cart'>
      {showDetail && <DetailCart />}
      <SimpleCart count={count} price={getTotalCost()} />
    </View>
  );
};

export default ShoppingCart;
