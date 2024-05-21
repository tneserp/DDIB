"use client";

import ItemDetail from "@/app/(route)/mypage/myitems/_components/ItemDetail";
import ItemList from "./_components/ItemList";
import styles from "./myItems.module.scss";

import Link from "next/link";
import { useState } from "react";

export default function MyItems() {
  const [pk, setPk] = useState(0);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const showDetail = (pk: number, title: string) => {
    setPk(pk);
    setTitle(title);
    setShow(true);
  };

  return (
    <div className={styles.container}>
      {!show && (
        <>
          <Link href={`/register`} className={styles.addBtn}>
            <div>상품등록하기</div>
          </Link>
          <div className={styles.listArea}>
            <ItemList showDetail={showDetail} />
          </div>
        </>
      )}

      {show && (
        <div>
          <div className={styles.goList} onClick={() => setShow(false)}>
            목록으로
          </div>
          <ItemDetail pk={pk} title={title} />
        </div>
      )}
    </div>
  );
}
