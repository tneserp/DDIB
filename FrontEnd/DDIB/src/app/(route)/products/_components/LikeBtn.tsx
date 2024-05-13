"use client";

import styles from "./likeBtn.module.scss";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLike, deleteLike } from "@/app/_api/product";
import { userStore } from "@/app/_store/user";
import cx from "classnames";

interface Props {
  productId: number;
  like: Boolean;
  likeCnt: number;
}

export default function LikeBtn({ productId, like, likeCnt }: Props) {
  const { userPk } = userStore();
  const [isLiked, setIsLiked] = useState(like);
  const [likeNowCnt, setLikeNowCnt] = useState(likeCnt);

  const heart = useMutation({
    mutationFn: async () => {
      return postLike(productId, userPk);
    },
    onMutate() {},
  });

  const likeProduct = async () => {
    if (isLiked) {
      console.log("좋아요취소");
      setIsLiked(false);
      setLikeNowCnt((prev) => prev - 1);
    } else {
      console.log("좋아요");
      setIsLiked(true);
      setLikeNowCnt((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.container} onClick={() => likeProduct()}>
      <div className={cx(styles.heart, isLiked && styles.active)}></div>
      <div className={styles.cnt}>{likeNowCnt}</div>
    </div>
  );
}
