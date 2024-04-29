"use client";

import styles from "./waitingModal.module.scss";
import { useEffect } from "react";
import { orderStore } from "@/app/_store/product";
import { useRouter } from "next/navigation";

export default function WaitingModal() {
  const { orderInfo } = orderStore();
  const router = useRouter();

  useEffect(() => {
    document.body.style.cssText = `
    position : fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const goOrder = () => {
    const id = orderInfo.productId;
    console.log(id);
    router.replace(`/order/${id}`);
  };

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modalInfo}>
          <div>나의 대기순서</div>
          <div onClick={() => goOrder()}>55</div>
          <div>현재 접속량이 많아 대기 중입니다.</div>
          <div>잠시만 기다려 주시면 결제 페이지로 연결됩니다.</div>
          <div>
            <div className={styles.bang}>!</div> 새로고침 하거나 재접속 하시면
          </div>
          <div>대기순서가 초기화되어 대기시간이 더 길어집니다.</div>
        </div>
      </div>
    </>
  );
}
