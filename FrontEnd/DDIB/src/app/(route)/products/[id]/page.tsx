"use client";

import styles from "./productDetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import product from "../../../../../public/product.webp";
import detail1 from "../../../../../public/detail1.jpg";
import detail2 from "../../../../../public/detail2.jpg";
import { ProductDetail } from "@/app/_types/types";
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
import { getProductDetail } from "@/app/_api/product";

export default function ProductDetail() {
  const productId = window.location.pathname.split("/").pop() as string;

  const router = useRouter();
  const { amount } = amountStore();
  const { setOrderInfo } = orderStore();
  const { user } = userStore();

  const { data } = useQuery<ProductDetail>({
    queryKey: ["productDetail", productId, user.userPk],
    queryFn: () => getProductDetail(productId, user.userPk),
  });

  const [salePrice, setSalePrice] = useState(0);
  const [viewMore, setViewMore] = useState(false);

  const joinBuy = () => {
    if (data) {
      const sendInfo = {
        productId: data.productId,
        thumbnailImage: data.thumbnailImage,
        companyName: data.companyName,
        name: data.name,
        totalAmount: amount,
        price: data.price,
        salePrice: salePrice,
        status: 0,
      };
      setOrderInfo(sendInfo);
      router.push("/order");
      // listIn(1)
      //   .then(() => {
      //     router.push("/order");
      //   })
      //   .catch((error) => {
      //     console.error("listIn 함수 호출 중 오류 발생:", error);
      //   });
    }
  };

  useEffect(() => {
    if (data) {
      const sale = data.price * (data.discount * 0.01);
      const finPrice = data.price - sale;
      setSalePrice(finPrice);
    }
  }, [data]);

  return (
    <>
      {data && (
        <>
          <main className={styles.main}>
            <div className={styles.category}>TimeDeal &gt; {data.category}</div>
            <div className={styles.info}>
              <div className={styles.sectionOne}>
                <div className={styles.thumbnail}>
                  <Image src={data.thumbnailImage} alt="상품썸네일" fill sizes="auto"></Image>
                </div>
              </div>
              <div className={styles.sectionTwo}>
                <div className={styles.companyMini}>
                  <div>
                    <AiFillShop />
                  </div>
                  <div>{data.companyName}</div>
                </div>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.price}>
                  <div>{data.price.toLocaleString("ko-KR")}</div>
                  <div>
                    <div>{salePrice.toLocaleString("ko-KR")} </div>
                    <div className={styles.discount}>{data.discount}%</div>
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.shipping}>
                  <LiaShippingFastSolid />
                  <div>무료배송</div>
                </div>
                {/* button area */}
                <TimeCount startTime={data.eventStartTime} />
                <AmountBtn stock={data.stock} />
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
                {data.details.map((image, index) => (
                  <Image key={index} src={image.imageUrl} alt="상품썸네일" fill sizes="auto"></Image>
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
                    <div>{data.companyName}</div>
                    <div>{data.companyPhone}</div>
                    <div>{data.companyEmail}</div>
                    <div>{data.businessNumber}</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
