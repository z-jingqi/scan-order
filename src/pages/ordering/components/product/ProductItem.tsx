import { View, Text, Button, Icon, Image } from "@tarojs/components"
import React from "react";
import { Product } from "../../../../schema";

import defaultImage from "../../../../../assets/images/default.webp";

import "./ProductItem.scss"

interface Props {
    product: Product
}

const ProductItem: React.FC<Props> = (props) => {

    const { product } = props;

    return (
        <View className='product-item'>
            <View className='product-image'>
                <Image mode='scaleToFill' src={defaultImage} />
            </View>
            <View className='product-info'>
                <Text>{product.name}</Text>
                <View className='tag-container'></View>
                <Text>{product?.description}</Text>
                <View>
                    <Text>{product.price}</Text>
                    <Button size='mini'>
                        <Icon type='circle' />
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default ProductItem;