"use client";

import { useMutation } from "@tanstack/react-query";

interface Props {
  like: Boolean;
  likeCnt: number;
}

export default function LikeBtn({ like, likeCnt }: Props) {
  return (
    <div>
      <div></div>
      <div>{likeCnt}</div>
    </div>
  );
}
