"use client";
import { useEffect } from "react";
import "@/firebase-messaging-sw";
import Cookies from "js-cookie";

export default function GetAlarmToken() {
  if (Cookies.get("Authorization")) {
    useEffect(() => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("../../../public/firebase-messaging-sw.js")
          .then((registration) => {
            console.log("Service Worker 등록 성공:", registration);
          })
          .catch((err) => {
            console.log("Service Worker 등록 실패:", err);
          });
      }
    }, []);
    return null;
  }
}
