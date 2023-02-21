import { View, Text, Button, Icon } from "@tarojs/components"
import React from "react";
import { Product } from "src/schema";

interface Props {
    product: Product
}

const ProductItem: React.FC<Props> = (props) => {

    const { product } = props;

    return (
        <View>
            <View className='image-container'></View>
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