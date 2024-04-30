"use client";

import styles from "./orderList.module.scss";
import product from "../../../../../public/product.webp";
import { useState, useEffect } from "react";
import { OrderProduct } from "@/app/_types/types";
import Link from "next/link";
import ProductOrdered from "@/app/_components/ProductOrdered";

export default function OrderList() {
  const orderItem = [
    {
      orderDate: "2024-04-24 18:00:00",
      productId: 3,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱",
      totalAmount: 3,
      price: 10000,
      salePrice: 9000,
      status: 0,
    },
    {
      orderDate: "2024-04-24 18:00:00",
      productId: 3,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱2",
      totalAmount: 3,
      price: 10000,
      salePrice: 9000,
      status: 1,
    },
  ];

  return (
    <div>
      <div className={styles.subTitle}>주문내역</div>
      <div>
        {orderItem?.map((items) => {
          return (
            <div key={items.productId} className={styles.productList}>
              <Link href={`/order/detailview/${items.productId}`}>
                <div className={styles.date}>
                  <div>{items.orderDate}</div>
                  {items.status === 0 ? "결제완료" : "취소완료"}
                </div>
                <div className={styles.orderNum}>
                  주문번호 {items.productId}
                </div>
                <ProductOrdered
                  productId={items.productId}
                  thumbnailImage={items.thumbnailImage}
                  companyName={items.companyName}
                  name={items.name}
                  totalAmount={items.totalAmount}
                  price={items.price}
                  salePrice={items.salePrice}
                  status={items.status}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
