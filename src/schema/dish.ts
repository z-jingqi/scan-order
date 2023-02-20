export interface Dish {
  id: string;
  name: string;
  /**
   * 商品价格
   */
  price: number;
  /**
   * 订购数量
   */
  quantity: number;
}
