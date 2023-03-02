import { Product } from "src/schema";

export const products: Product[] = [
  {
    id: "p1",
    name: "牛肉",
    price: 25,
    productCategory: [
      {
        categoryId: "huncai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p2",
    name: "羊肉",
    price: 13,
    productCategory: [
      {
        categoryId: "huncai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p3",
    name: "猪肉",
    price: 10,
    productCategory: [
      {
        categoryId: "huncai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p4",
    name: "鸡肉",
    price: 22,
    productCategory: [
      {
        categoryId: "huncai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p5",
    name: "名称很长很长很长的荤菜",
    price: 25,
    productCategory: [
      {
        categoryId: "huncai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p6",
    name: "土豆",
    price: 5,
    productCategory: [
      {
        categoryId: "sucai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p7",
    name: "莴笋",
    price: 5,
    productCategory: [
      {
        categoryId: "sucai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p8",
    name: "藕片",
    price: 12,
    productCategory: [
      {
        categoryId: "sucai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p9",
    name: "豆芽",
    price: 12,
    productCategory: [
      {
        categoryId: "sucai",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p10",
    name: "牛油红锅",
    price: 30,
    productCategory: [
      {
        categoryId: "guodi",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p11",
    name: "番茄鸳鸯锅",
    price: 30,
    productCategory: [
      {
        categoryId: "guodi",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p12",
    name: "酥肉",
    price: 10,
    productCategory: [
      {
        categoryId: "xiaochi",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p13",
    name: "南瓜饼",
    price: 17,
    productCategory: [
      {
        categoryId: "xiaochi",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p14",
    name: "分类一商品一",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-one",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p15",
    name: "分类一商品二",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-one",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p16",
    name: "分类一商品三",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-one",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p17",
    name: "分类一商品四",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-one",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p18",
    name: "分类二商品一",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-two",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p19",
    name: "分类二商品二",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-two",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p20",
    name: "分类二商品三",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-two",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p21",
    name: "分类二商品四",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-two",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p22",
    name: "分类三商品一",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-three",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p23",
    name: "分类三商品二",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-three",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p24",
    name: "分类三商品三",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-three",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p25",
    name: "分类三商品四",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-three",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p26",
    name: "分类四商品一",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-four",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p27",
    name: "分类四商品二",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-four",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p28",
    name: "分类四商品三",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-four",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p29",
    name: "分类四商品四",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-four",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p30",
    name: "分类四商品五",
    price: 17,
    productCategory: [
      {
        categoryId: "cate-four",
        categoryType: "base",
      },
    ],
  },
  {
    id: "p31",
    name: "套餐",
    combo: {
      id: "",
      productId: "",
      totalPrice: 20,
      comboGroups: [
        {
          name: "套餐分组A",
          comboGroupRule: {
            type: "must",
            maxCount: 3,
          },
          comboGroupItems: [
            {
              productName: "商品A",
              productPrice: 4,
            },
          ],
        },
      ],
    },
    type: "combo",
    productCategory: [
      {
        categoryId: "combo",
        categoryType: "base",
      },
    ],
  },
];
