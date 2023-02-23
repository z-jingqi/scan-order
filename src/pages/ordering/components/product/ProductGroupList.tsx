import { ScrollView } from "@tarojs/components";
import { useStore } from '../../../../stores';

import './ProductGroupList.scss'
import { groupProducts } from "./utils";
import ProductGroupItem from "./ProductGroupItem";

const ProductGroupList = () => {

  const { categoryStore, productStore } = useStore();

  const { categories } = categoryStore;
  const { products } = productStore;

  const productGroups = groupProducts(categories, products);

  return (
    <ScrollView className='product-group-list-scroll' showScrollbar={false} scrollY>
      {productGroups.map((group, index) => <ProductGroupItem key={index} group={group} />)}
    </ScrollView>
  );
}

export default ProductGroupList;