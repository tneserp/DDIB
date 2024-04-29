"use client";

import OrderForm from "@/app/_components/OrderForm";
import { useEffect, useState } from "react";
import { OrderProduct, OrderAddressInfo } from "@/app/_types/types";
import product from "../../../../../../public/product.webp";
import { orderStore, orderAddressStore } from "@/app/_store/product";

export default function OrderComplete() {
  // 여기서 주문정보랑 배송지정보 가져와서 등록해버리기
  const { setOrderInfo } = orderStore();
  const [productInfo, setProductInfo] = useState<OrderProduct>({
    productId: 3,
    thumbnailImage: product,
    companyName: "joonseoung",
    name: "맥 레트로 매트 립스틱2",
    totalAmount: 3,
    price: 10000,
    salePrice: 9000,
  });

  const { setOrderAddressInfo } = orderAddressStore();
  const [addressInfo, setAddressInfo] = useState<OrderAddressInfo>({
    receiverName: "김싸피",
    receiverPhone: "01022223333",
    orderZipcode: "12322",
    orderRoadAddress: "광주 하남산로 45번길",
    orderDetailAddress: "2-2 6층",
  });

  useEffect(() => {
    setOrderInfo(productInfo);
    setOrderAddressInfo(addressInfo);
  }, []);
  return <OrderForm type="complete" />;
}
