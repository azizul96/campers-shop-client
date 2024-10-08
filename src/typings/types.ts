export type Product = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  ratings: number;
  images: string;
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  images: string;
};

export type OrderDetails = {
  orderId: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  deliveryDate: string;
};
