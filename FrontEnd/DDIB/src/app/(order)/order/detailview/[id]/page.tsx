"use client";

import OrderForm from "@/app/_components/OrderForm";
import { useEffect, useState } from "react";
import { OrderDetail } from "@/app/_types/types";
import { useQuery } from "@tanstack/react-query";
import { getOrderDetail } from "@/app/_api/order";
import { orderStore, orderAddressStore } from "@/app/_store/product";
import { useParams } from "next/navigation";

export default function OrderDetailView() {
  const path = useParams();
  const id = path.id as string;

  const { setOrderInfo } = orderStore();
  const { setOrderAddressInfo } = orderAddressStore();
  const [isDone, setIsDone] = useState(false);

  const { data } = useQuery<OrderDetail>({
    queryKey: ["orderView", id],
    queryFn: () => getOrderDetail(id),
  });

  useEffect(() => {
    console.log(id);
    if (data) {
      const productInfo = {
        productId: 0,
        thumbnailImage: data.thumbnailImage,
        companyName: data.companyName,
        name: data.productName,
        totalAmount: data.quantity,
        price: data.price,
        salePrice: data.totalAmount / data.quantity,
        status: data.status,
      };

      const addressInfo = {
        receiverName: data.receiverName,
        receiverPhone: data.receiverPhone,
        orderZipcode: data.orderZipcode,
        orderRoadAddress: data.orderRoadAddress,
        orderDetailAddress: data.orderDetailAddress,
      };
      console.log("ss");
      setOrderInfo(productInfo);
      setOrderAddressInfo(addressInfo);
      setIsDone(true);
    }
  }, []);

  return (
    <>
      {isDone && data && (
        <>
          <OrderForm type="orderView" orderId={data.orderId} orderDate={data.orderDate} paymentMethod={data.paymentMethod} />
        </>
      )}
    </>
  );
}
