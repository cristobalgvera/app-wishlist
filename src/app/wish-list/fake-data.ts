import { Product } from "./product.type";

export const FAKE_DATA: ReadonlyArray<Product> = [
  {
    checked: true,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    imageUrl: "https://picsum.photos/201",
  },
  {
    checked: false,
    name: "Product 2",
    description: "This is a description",
    imageUrl: "https://picsum.photos/202",
  },
  {
    checked: true,
    name: "Product 3",
    imageUrl: "https://picsum.photos/203",
    description: "This is a description",
  },
  {
    checked: false,
    name: "Product 4",
    description: "This is a description",
    imageUrl: "https://picsum.photos/204",
  },
];
