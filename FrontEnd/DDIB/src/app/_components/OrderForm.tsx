"use client";

import ProductOrdered from "@/app/_components/ProductOrdered";
import styles from "./orderForm.module.scss";
import AddressForm from "./AddressForm";
import { orderStore } from "@/app/_store/product";
import { FaDotCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import kakao from "../../../public/kakaopay.svg";
import { OrderProduct } from "@/app/_types/types";
import { useMutation } from "@tanstack/react-query";
import { postReady } from "../_api/pay";
import { OrderInfo } from "@/app/_types/types";

interface Props {
  type: string;
}

export default function OrderForm({ type }: Props) {
  const { orderInfo } = orderStore();
  const router = useRouter();
  const [checkPay, setCheckPay] = useState(false);
  const [orderProduct, setOrderProduct] = useState<OrderProduct>();

  const sendOrder = useMutation({
    mutationFn: async (data: OrderInfo) => {
      return postReady(data);
    },
    async onSuccess(response) {
      const url = response.next_redirect_pc_url;
      console.log(url);
    },
    onError(error) {
      console.error(error);
    },
  });

  const buyItem = () => {
    const sendInfo = {
      productId: orderInfo.productId,
      itemName: orderInfo.name,
      quantity: orderInfo.totalAmount,
      totalAmount: orderInfo.totalAmount * orderInfo.salePrice,
      taxFreeAmount: 0,
      receiverName: "유세진",
      receiverPhone: "01066041442",
      orderRoadAddress: "서울특별시 관악구 은천로 93",
      orderDetailAddress: "102동 705호",
      orderZipcode: "08715",
    };
    sendOrder.mutate(sendInfo);
    //router.push(`/order/complete/${orderInfo.productId}`);
  };

  return (
    <div className={styles.main}>
      {type === "order" && <div className={styles.title}>주문/결제</div>}
      {type === "complete" && <div className={styles.title}>결제완료</div>}
      {type === "orderView" && <div className={styles.title}>주문내역상세</div>}
      <div className={styles.section}>
        <div className={styles.subTitle}>주문상품</div>
        <div className={styles.lineTwo}></div>
        <div className={styles.productInfo}>
          <div>상품정보</div>
          <div>수량</div>
          <div>가격</div>
          <div>구매금액</div>
        </div>
        <div className={styles.lineOne}></div>
        {orderInfo && (
          <div className={styles.productArea}>
            <ProductOrdered
              productId={orderInfo.productId}
              thumbnailImage={orderInfo.thumbnailImage}
              companyName={orderInfo.companyName}
              name={orderInfo.name}
              totalAmount={orderInfo.totalAmount}
              price={orderInfo.price}
              salePrice={orderInfo.salePrice}
              status={orderInfo.status}
            />
          </div>
        )}
        <div className={styles.lineTwo}></div>
      </div>
      <div className={styles.section}>
        <div className={styles.subTitle}>배송주소</div>
        <div className={styles.lineTwo}></div>
        <AddressForm type={type} />
        <div className={styles.lineTwo}></div>
      </div>
      <div className={styles.section}>
        <div className={styles.subTitle}>결제금액</div>
        <div className={styles.lineTwo}></div>
        <div className={styles.priceArea}>
          <div className={styles.priceItem}>
            <div>상품금액</div>
            <div>{(orderInfo.price * orderInfo.totalAmount).toLocaleString("ko-KR")}</div>
          </div>
          <div className={styles.priceItem}>
            <div>배송비</div>
            <div>0</div>
          </div>
          <div className={styles.priceItem}>
            <div>할인금액</div>
            <div>{((orderInfo.price - orderInfo.salePrice) * orderInfo.totalAmount).toLocaleString("ko-KR")}</div>
          </div>
          <div className={styles.priceItem}>
            <div>총 상품 금액</div>
            <div>{(orderInfo.salePrice * orderInfo.totalAmount).toLocaleString("ko-KR")}</div>
          </div>
        </div>
        <div className={styles.lineTwo}></div>
      </div>
      <div className={styles.section}>
        <div className={styles.subTitle}>결제방식</div>
        <div className={styles.lineTwo}></div>
        {type === "order" ? (
          <div className={styles.payBtn} onClick={() => setCheckPay((prev) => !prev)}>
            <div>{checkPay ? <FaDotCircle color="#ff5454" /> : <FaRegDotCircle color="gray" />}</div>
            <Image className={styles.kakaologo} src={kakao} alt="kakao"></Image>
            <div>
              kakao<span style={{ fontWeight: "bold" }}>pay</span>
            </div>
          </div>
        ) : (
          <div className={styles.payBtn}>
            <Image className={styles.kakaologo} src={kakao} alt="kakao"></Image>
            <div>
              kakao<span style={{ fontWeight: "bold" }}>pay</span>
            </div>
          </div>
        )}
      </div>
      {type === "order" && (
        <div className={styles.buyBtn} onClick={buyItem}>
          결제하기
        </div>
      )}
    </div>
  );
}
