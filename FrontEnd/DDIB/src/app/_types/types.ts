export interface User {
  userPk: number;
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  roadAddress: string;
  detailAddress: string;
}

export interface Product {
  productId: number;
  name: string;
  totalStock: number;
  stock: number;
  eventStartTime: string;
  eventEndTime: string;
  price: number;
  discount: number;
  thumbnailImage: string;
  category: string;
  details: Array<string>;
  likeCount: number;
  like: boolean;
  sellerId: number;
  companyName: string;
  businessNumber: number;
  companyPhone: number;
  companyEmail: string;
}

export interface OrderProduct {
  productId: number;
  thumbnailImage: string;
  companyName: string;
  name: string;
  totalAmount: number;
  price: number;
  salePrice: number;
  status: number;
}

export interface OrderAddressInfo {
  receiverName: string;
  receiverPhone: string;
  orderZipcode: string;
  orderRoadAddress: string;
  orderDetailAddress: string;
}

export interface Que {
  rank: number;
}

export interface OrderInfo {
  productId: number;
  itemName: string;
  quantity: number;
  totalAmount: number;
  taxFreeAmount: number;
  receiverName: string;
  receiverPhone: string;
  orderRoadAddress: string;
  orderDetailAddress: string;
  orderZipcode: string;
}
