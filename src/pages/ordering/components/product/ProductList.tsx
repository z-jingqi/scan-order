import { ScrollView } from "@tarojs/components";
import { useStore } from '../../../../stores';
import ProductItem from "./ProductItem";

import './ProductList.scss'

const ProductList = () => {

    const { productStore } = useStore();

    const { products } = productStore;

    return (
        <ScrollView className='product-list-scroll' showScrollbar={false} scrollY>
            {products.map(product => <ProductItem key={product.id} product={product} />)}
        </ScrollView>
    );
}

export default ProductList;