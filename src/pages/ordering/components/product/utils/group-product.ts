import { Category, Product, ProductGroup } from "../../../../../schema";

export const groupProducts = (
  categories: Category[],
  products: Product[]
): ProductGroup[] => {
  if (!products?.length || !categories?.length) {
    return [];
  }
  const result: ProductGroup[] = [];
  for (const category of categories) {
    const targets = products.filter((product) =>
      product?.productCategory?.some((pc) => pc.categoryId === category.id)
    );
    const group: ProductGroup = {
      category: { id: category.id, name: category.name },
      products: targets,
    };
    result.push(group);
  }
  return result;
};
