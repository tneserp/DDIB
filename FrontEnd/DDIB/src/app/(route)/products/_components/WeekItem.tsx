"use client";

import weekJson from "./weekList.json";
import styles from "./weekItem.module.scss";
import Image from "next/image";
import product from "../../../../../public/product.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import { getImage } from "@/app/_utils/commonFunction";

interface Props {
  checkDay: number;
}

export default function WeekItem({ checkDay }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src={weekJson.weeklyData[0].thumbnailImage}
          alt="상품썸네일"
          fill
          sizes="auto"
        ></Image>
      </div>
      <div className={styles.itemArea}>
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          slidesPerView={3}
          centeredSlides={true}
          slideToClickedSlide={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {weekJson.weeklyData.map((item, index) => {
            if (index !== 0) {
              return (
                <SwiperSlide key={index} className={styles.swiperItem}>
                  <Link href={`/products/${item.productId}`}>
                    <div className={styles.item}>
                      <Image
                        src={item.thumbnailImage}
                        alt="상품썸네일"
                        fill
                        sizes="auto"
                      ></Image>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            } else {
              return null;
            }
          })}
        </Swiper>
      </div>
    </div>
  );
}
