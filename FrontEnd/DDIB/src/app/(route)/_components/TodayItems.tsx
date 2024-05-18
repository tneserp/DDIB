"use client";

import styles from "./todayItem.module.scss";
import { Product } from "@/app/_types/types";
import { useState, useEffect } from "react";
import Slide from "./Slide";

interface Props {
  todayList: Product[];
}

const slideshowItems: Product[] = [
  {
    productId: 23,
    name: "나이키 조던",
    totalStock: 1000,
    stock: 1000,
    eventStartDate: "2024-05-17T14:00:00",
    eventEndDate: "2024-05-17T16:00:00",
    eventStartTime: "14",
    eventEndTime: "16",
    price: 10000,
    discount: 10.0,
    thumbnailImage: "https://iandwe.s3.ap-northeast-2.amazonaws.com/thumbnail/OQcNkT4d",
    category: "Fashion",
    details: [
      {
        productDetailId: 23,
        imageUrl: "https://iandwe.s3.ap-northeast-2.amazonaws.com/details/hL5SqOBk",
      },
    ],
    likeCount: 1,
    sellerId: 1,
    sellerEmail: "sarah@dunst.com",
    companyName: "joonseong",
    businessNumber: 101010101,
    ceoName: "Tom",
    ceoEmail: "306yyy@naver.com",
    ceoPhone: "1043200933",
    over: false,
  },
  {
    productId: 23,
    name: "name3",
    totalStock: 1000,
    stock: 1000,
    eventStartDate: "2024-05-17T17:00:00",
    eventEndDate: "2024-05-17T18:00:00",
    eventStartTime: "17",
    eventEndTime: "18",
    price: 10000,
    discount: 10.0,
    thumbnailImage: "https://iandwe.s3.ap-northeast-2.amazonaws.com/thumbnail/egqHlHZG",
    category: "Fashion",
    details: [
      {
        productDetailId: 23,
        imageUrl: "https://iandwe.s3.ap-northeast-2.amazonaws.com/details/hL5SqOBk",
      },
    ],
    likeCount: 1,
    sellerId: 1,
    sellerEmail: "sarah@dunst.com",
    companyName: "joonseong",
    businessNumber: 101010101,
    ceoName: "Tom",
    ceoEmail: "306yyy@naver.com",
    ceoPhone: "1043200933",
    over: false,
  },
  {
    productId: 23,
    name: "name3",
    totalStock: 1000,
    stock: 1000,
    eventStartDate: "2024-05-17T19:00:00",
    eventEndDate: "2024-05-17T20:00:00",
    eventStartTime: "19",
    eventEndTime: "20",
    price: 10000,
    discount: 10.0,
    thumbnailImage: "https://iandwe.s3.ap-northeast-2.amazonaws.com/thumbnail/egqHlHZG",
    category: "Fashion",
    details: [
      {
        productDetailId: 23,
        imageUrl: "https://iandwe.s3.ap-northeast-2.amazonaws.com/details/hL5SqOBk",
      },
    ],
    likeCount: 1,
    sellerId: 1,
    sellerEmail: "sarah@dunst.com",
    companyName: "joonseong",
    businessNumber: 101010101,
    ceoName: "Tom",
    ceoEmail: "306yyy@naver.com",
    ceoPhone: "1043200933",
    over: false,
  },
  {
    productId: 23,
    name: "name3",
    totalStock: 1000,
    stock: 1000,
    eventStartDate: "2024-05-17T19:00:00",
    eventEndDate: "2024-05-17T20:00:00",
    eventStartTime: "19",
    eventEndTime: "20",
    price: 10000,
    discount: 10.0,
    thumbnailImage: "https://iandwe.s3.ap-northeast-2.amazonaws.com/thumbnail/egqHlHZG",
    category: "Fashion",
    details: [
      {
        productDetailId: 23,
        imageUrl: "https://iandwe.s3.ap-northeast-2.amazonaws.com/details/hL5SqOBk",
      },
    ],
    likeCount: 1,
    sellerId: 1,
    sellerEmail: "sarah@dunst.com",
    companyName: "joonseong",
    businessNumber: 101010101,
    ceoName: "Tom",
    ceoEmail: "306yyy@naver.com",
    ceoPhone: "1043200933",
    over: false,
  },
  {
    productId: 23,
    name: "name3",
    totalStock: 1000,
    stock: 1000,
    eventStartDate: "2024-05-17T19:00:00",
    eventEndDate: "2024-05-17T20:00:00",
    eventStartTime: "19",
    eventEndTime: "20",
    price: 10000,
    discount: 10.0,
    thumbnailImage: "https://iandwe.s3.ap-northeast-2.amazonaws.com/thumbnail/egqHlHZG",
    category: "Fashion",
    details: [
      {
        productDetailId: 23,
        imageUrl: "https://iandwe.s3.ap-northeast-2.amazonaws.com/details/hL5SqOBk",
      },
    ],
    likeCount: 1,
    sellerId: 1,
    sellerEmail: "sarah@dunst.com",
    companyName: "joonseong",
    businessNumber: 101010101,
    ceoName: "Tom",
    ceoEmail: "306yyy@naver.com",
    ceoPhone: "1043200933",
    over: false,
  },
  {
    productId: 23,
    name: "name3",
    totalStock: 1000,
    stock: 1000,
    eventStartDate: "2024-05-17T19:00:00",
    eventEndDate: "2024-05-17T20:00:00",
    eventStartTime: "19",
    eventEndTime: "20",
    price: 10000,
    discount: 10.0,
    thumbnailImage: "https://iandwe.s3.ap-northeast-2.amazonaws.com/thumbnail/egqHlHZG",
    category: "Fashion",
    details: [
      {
        productDetailId: 23,
        imageUrl: "https://iandwe.s3.ap-northeast-2.amazonaws.com/details/hL5SqOBk",
      },
    ],
    likeCount: 1,
    sellerId: 1,
    sellerEmail: "sarah@dunst.com",
    companyName: "joonseong",
    businessNumber: 101010101,
    ceoName: "Tom",
    ceoEmail: "306yyy@naver.com",
    ceoPhone: "1043200933",
    over: false,
  },
];

export default function TodayItems({ todayList }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    console.log("넘어가니");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slideshowItems.length - 1) % slideshowItems.length);
  };

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div className={styles.main}>
      <ul className={styles.slider}>
        {slideshowItems.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </ul>
      <nav className={styles.nav}>
        <button className="btn prev" onClick={prevSlide}>
          Prev
        </button>
        <button className="btn next" onClick={nextSlide}>
          Next
        </button>
      </nav>
    </div>
  );
}
