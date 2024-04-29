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
}

export interface OrderAddressInfo {
  receiverName: string;
  receiverPhone: string;
  orderZipcode: string;
  orderRoadAddress: string;
  orderDetailAddress: string;
}
