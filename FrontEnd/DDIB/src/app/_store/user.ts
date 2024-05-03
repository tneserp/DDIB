import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/app/_types/types";

interface UserInfo {
  user: User;
  setUser: (info: User) => void;
}

export const userStore = create(
  persist<UserInfo>(
    (set, get) => ({
      user: {
        userPk: 1,
        name: "김싸피",
        phone: "010-2222-8888",
        email: "dddd@naver.com",
        zipCode: "22222",
        roadAddress: "주소임당",
        detailAddress: "상세주소임당",
      },
      setUser: (info) => set(() => ({ user: info })),
    }),
    {
      name: "UserStorage",
    }
  )
);
