import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/app/_types/types";

interface UserInfo {
  jwt: string;
  userPk: number;
  user: User;
  setJwt: (token: string) => void;
  setUserPk: (pk: number) => void;
  setUserInfo: (info: User) => void;
}

export const userStore = create(
  persist<UserInfo>(
    (set) => ({
      jwt: "",
      userPk: 9,
      user: {
        name: "재거스",
        phone: "010-2222-2222",
        email: "",
        zipCode: "23423",
        roadAddress: "화개중앙로 76번길",
        detailAddress: "102동 303호",
      },
      setJwt: (token) => set(() => ({ jwt: token })),
      setUserPk: (pk) => set(() => ({ userPk: pk })),
      setUserInfo: (info) => set(() => ({ user: info })),
    }),
    {
      name: "UserStorage",
    }
  )
);
