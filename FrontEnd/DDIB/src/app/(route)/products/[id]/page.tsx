"use client";

import styles from "./productDetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import product from "../../../../../public/product.webp";
import detail1 from "../../../../../public/detail1.jpg";
import detail2 from "../../../../../public/detail2.jpg";
import { Product } from "@/app/_types/types";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { AiFillShop } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import TimeCount from "@/app/_components/TimeCount";
import AmountBtn from "@/app/_components/AmountBtn";
import { amountStore, orderStore } from "@/app/_store/product";
import { userStore } from "@/app/_store/user";
import { listIn } from "@/app/_api/waiting";
import { useQuery } from "@tanstack/react-query";

export default function ProductDetail() {
  const router = useRouter();
  const { amount } = amountStore();
  const { setOrderInfo } = orderStore();
  const { user } = userStore();

  const [productInfo, setProductInfo] = useState<Product>({
    productId: 1,
    name: "맥 레트로 매트 립스틱",
    totalStock: 1000,
    stock: 10,
    eventStartTime: "2024-04-24T18:00:00.000+00:00",
    eventEndTime: "2024-04-24T21:00:00.000+00:00",
    price: 10000,
    discount: 10.0,
    thumbnailImage: product,
    category: "Fashion",
    details: [detail1, detail2],
    likeCount: 1,
    like: true,
    sellerId: 1,
    companyName: "joonseong",
    businessNumber: 34899438,
    companyPhone: 1043200933,
    companyEmail: "306yyy@naver.com",
  });

  const [salePrice, setSalePrice] = useState(0);
  const [viewMore, setViewMore] = useState(false);

  const joinBuy = () => {
    const sendInfo = {
      productId: productInfo.productId,
      thumbnailImage: productInfo.thumbnailImage,
      companyName: productInfo.companyName,
      name: productInfo.name,
      totalAmount: amount,
      price: productInfo.price,
      salePrice: salePrice,
      status: 0,
    };
    setOrderInfo(sendInfo);
    listIn(1)
      .then(() => {
        router.push("/order");
      })
      .catch((error) => {
        console.error("listIn 함수 호출 중 오류 발생:", error);
      });
  };

  useEffect(() => {
    const sale = productInfo.price * (productInfo.discount * 0.01);
    const finPrice = productInfo.price - sale;
    setSalePrice(finPrice);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.category}>TimeDeal &gt; {productInfo.category}</div>
      <div className={styles.info}>
        <div className={styles.sectionOne}>
          <div className={styles.thumbnail}>
            <Image src={productInfo.thumbnailImage} alt="상품썸네일"></Image>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.companyMini}>
            <div>
              <AiFillShop />
            </div>
            <div>{productInfo.companyName}</div>
          </div>
          <div className={styles.name}>{productInfo.name}</div>
          <div className={styles.price}>
            <div>{productInfo.price.toLocaleString("ko-KR")}</div>
            <div>
              <div>{salePrice.toLocaleString("ko-KR")} </div>
              <div className={styles.discount}>{productInfo.discount}%</div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.shipping}>
            <LiaShippingFastSolid />
            <div>무료배송</div>
          </div>
          {/* button area */}
          <TimeCount startTime={productInfo.eventStartTime} />
          <AmountBtn stock={productInfo.stock} />
          <div className={styles.line}></div>
          <div className={styles.totalPrice}>
            <div>총 {amount}개</div>
            <div>{(amount * salePrice).toLocaleString("ko-KR")}</div>
          </div>
          <div className={styles.btnArea}>
            <div></div>
            <div>
              <div
                className={styles.joinBuy}
                onClick={() => {
                  joinBuy();
                }}
              ></div>
              {/* <Link
                href={`/products/${productInfo.productId}/wait`}
              >
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailArea}>
        <div className={styles.detailTitle}>Details</div>
        <div className={viewMore ? `${styles.detailPhotoView}` : `${styles.detailPhoto}`}>
          {productInfo.details.map((image, index) => (
            <div key={index}>
              <Image src={image} alt="상품썸네일"></Image>
            </div>
          ))}
        </div>
        <div
          className={styles.moreBtnArea}
          onClick={() => {
            setViewMore((prev) => !prev);
          }}
        >
          {viewMore ? (
            <>
              <div>Hide</div>
              <div>
                <TfiArrowCircleUp />
              </div>
            </>
          ) : (
            <>
              <div>More</div>
              <div>
                <TfiArrowCircleDown />
              </div>
            </>
          )}
        </div>
        <div className={styles.sellerInfo}>
          <div className={styles.sellerTitle}>Seller Info</div>
          <div className={styles.sellerItemArea}>
            <div className={styles.sellerItem}>
              <div>회사명</div>
              <div>대표번호</div>
              <div>대표이메일</div>
              <div>사업자번호</div>
            </div>
            <div className={styles.sellerItem}>
              <div>{productInfo.companyName}</div>
              <div>{productInfo.companyPhone}</div>
              <div>{productInfo.companyEmail}</div>
              <div>{productInfo.businessNumber}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
