import { View } from "@tarojs/components";
import React from "react";
import { Product } from "../../../../schema";
import ProductItem from "./ProductItem";

import "./ProductList.scss";

interface Props {
    products: Product[]
}

const ProductList: React.FC<Props> = (props) => {

    const { products } = props;

    return (
        <View className='product-list'>
            {products.map(product => <ProductItem key={product.id} product={product} />)}
        </View>
    )
}

export default ProductList;