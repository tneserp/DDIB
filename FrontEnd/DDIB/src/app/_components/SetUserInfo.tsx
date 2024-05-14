"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../_api/user";
import { User } from "../_types/types";
import { userStore } from "../_store/user";

interface Props {
  pk: number;
}

export default function SetUserInfo({ pk }: Props) {
  const { setUserInfo } = userStore();

  const { data } = useQuery<User>({
    queryKey: ["userInfo", pk],
    queryFn: () => getUserInfo(pk),
  });

  useEffect(() => {
    console.log(data);
    if (data) {
      const info = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        zipCode: data.zipCode,
        roadAddress: data.roadAddress,
        detailAddress: data.detailAddress,
      };
      setUserInfo(info);
    }
  }, []);

  return null;
}
