"use client";

import AddressForm from "@/app/_components/AddressForm";
import styles from "./userInfo.module.scss";
import { useMutation } from "@tanstack/react-query";
import { deleteUser, putUserInfo } from "@/app/_api/user";
import SetUserInfo from "@/app/_components/SetUserInfo";
import Apply from "@/app/(route)/mypage/userinfo/_components/Apply";
import Cookies from "js-cookie";
import { useRef, useState } from "react";
import { RefProps } from "@/app/_components/AddressForm";
import { useRouter } from "next/navigation";
import { orderAddressStore } from "@/app/_store/product";
import { UserModi } from "@/app/_types/types";

export default function UserInfo() {
  const { addressInfo } = orderAddressStore();
  const userPk = Cookies.get("num") as string;
  const saveRef = useRef<RefProps>(null);
  const router = useRouter();
  const [renderKey, setRenderKey] = useState(0);

  const quitUser = useMutation({
    mutationFn: async () => {
      return await deleteUser();
    },
    async onSuccess(response) {
      alert("탈퇴완료");
      router.replace("/");
    },
    onError(error) {
      console.error(error);
    },
  });

  const modifyUser = useMutation({
    mutationFn: async (data: UserModi) => {
      return await putUserInfo(userPk, data);
    },
    async onSuccess(response) {
      alert("수정완료");
    },
    onError(error) {
      console.error(error);
    },
  });

  const modify = () => {
    const check = saveRef?.current?.saveAddress();
    if (check) {
      const sendUser = {
        name: addressInfo.receiverName,
        phone: addressInfo.receiverPhone,
        roadAddress: addressInfo.orderRoadAddress,
        detailAddress: addressInfo.orderDetailAddress,
        zipcode: addressInfo.orderZipcode,
      };
      modifyUser.mutate(sendUser);
      setRenderKey((prevKey) => prevKey + 1);
    } else {
      alert("비어있는 칸이 있습니다.");
    }
  };

  const quit = () => {
    quitUser.mutate();
  };

  return (
    <>
      <SetUserInfo pk={userPk} />
      <div>
        <div className={styles.title}>User Info</div>
        <div className={styles.categoryArea}>
          <Apply />
        </div>
        <AddressForm type="mypage" ref={saveRef} />
        <div className={styles.btnArea}>
          <div className={styles.modifyBtn} onClick={() => modify()}>
            수정하기
          </div>
          <div className={styles.quitBtn} onClick={() => quit()}>
            탈퇴하기
          </div>
        </div>
      </div>
    </>
  );
}
