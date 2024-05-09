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
      jwt: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsImVtYWlsIjoia245MDEyQG5hdmVyLmNvbSIsImlhdCI6MTcxNTA3MjQ3MSwiZXhwIjoxNzE1MDc2MDcxfQ.JKq1KrUusRgpg1FHL7uW7F6ce9qoUSXdxXy0eVuwxf8",
      userPk: 3,
      user: {
        name: "나성",
        phone: "010-4747-4949",
        email: "",
        zipCode: "62011",
        roadAddress: "광주 서구 화개중앙로 87번길",
        detailAddress: "16-1",
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
