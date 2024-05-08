"use client";

import { useEffect } from "react";
import { userStore } from "../_store/user";
import Cookies from "js-cookie";

export default function CheckToken() {
  const { jwt, setJwt, setUserPk } = userStore();

  const update = () => {
    if (jwt.length == 0) {
      if (Cookies.get("Authorization")) {
        const token = Cookies.get("Authoization") as string;
        const pk = parseInt(Cookies.get("num") as string, 10);
        setJwt(token);
        setUserPk(pk);
        alert("로그인 성공");
      }
    }
  };

  useEffect(() => {
    update();
  }, []);

  return null;
}
