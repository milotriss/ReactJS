export interface IProduct {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
}
export interface Carts extends IProduct {
  quantity: number;
}
export const products: IProduct[] = [
  {
    id: 1,
    name: "Laptop Asus",
    description: "Đây là laptop Asus",
    img: "https://consumerqueen.com/wp-content/uploads/2017/03/Asus-Laptop-1.jpeg",
    price: 10000000,
  },
  {
    id: 2,
    name: "Macbook",
    description: "Đây là Macbook",
    img: "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/5d/50/5e/1d977cb23133c625f0baf7f4326cf523.jpg",
    price: 20000000,
  },
  {
    id: 3,
    name: "Laptop Dell",
    description: "Đây là laptop Dell",
    img: "https://hanoicomputercdn.com/media/product/64720_laptop_dell_latitude_3420_16.png",
    price: 15000000,
  },
  {
    id: 4,
    name: "Laptop HP",
    description: "Đây là laptop HP",
    img: "https://cdn.ankhang.vn/media/product/22670_laptop_hp_240_g8_6l145pa_13.jpg",
    price: 18000000,
  },
];
