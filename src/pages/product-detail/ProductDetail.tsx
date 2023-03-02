import { View } from "@tarojs/components";
import React from "react"
import { Product } from "../../schema"

interface Props {
  product: Product
}

const AddToCart = () => {
  return (
    <View>

    </View>
  );
}

const ProductDetail: React.FC<Props> = (props) => {
  const { product } = props;
  return (
    <View></View>
  );
}

export default ProductDetail;