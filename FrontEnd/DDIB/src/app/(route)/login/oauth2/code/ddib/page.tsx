"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      router.replace("/login/done");
    }
  }, []);

  return <>로그인</>;
}
