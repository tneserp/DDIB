"use client";

import styles from "./productOrdered.module.scss";
import Image from "next/image";
import { orderStore } from "@/app/_store/product";
import { AiFillShop } from "react-icons/ai";

export default function ProductOrdered() {
  const { orderInfo } = orderStore();

  return (
    <div className={styles.main}>
      <div className={styles.orderedItem}>
        <div>
          <div className={styles.thumbnail}>
            <Image src={orderInfo.thumbnailImage} alt="상품썸네일"></Image>
          </div>
        </div>
        <div>
          <div className={styles.companyMini}>
            <div>
              <AiFillShop />
            </div>
            <div>{orderInfo.companyName}</div>
          </div>
          <div>{orderInfo.name}</div>
        </div>
      </div>
      <div className={styles.totalAmount}>{orderInfo.totalAmount}</div>
      <div className={styles.price}>
        <div>{orderInfo.price.toLocaleString("ko-KR")}</div>
        <div>{orderInfo.salePrice.toLocaleString("ko-KR")}</div>
      </div>
      <div className={styles.totalPrice}>{(orderInfo.salePrice * orderInfo.totalAmount).toLocaleString("ko-KR")}</div>
    </div>
  );
}
