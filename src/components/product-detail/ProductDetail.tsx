import { View, RootPortal } from "@tarojs/components";
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
    <View style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9 }}>
      test
    </View>
  );
}

export default ProductDetail;