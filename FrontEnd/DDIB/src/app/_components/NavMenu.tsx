"use client";

import styles from "./navMenu.module.scss";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { GoBellFill } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import Alarm from "./Alarm";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();
  console.log(segment);

  const me = {
    id: "mk",
  };

  const [bellOn, setBellOn] = useState(false);

  const kakaoLogin = () => {
    window.location.href = "https://k10c102.p.ssafy.io/api/oauth2/ddib/kakao";
  };

  return (
    <>
      <div className={styles.main}>
        <li className={styles.title}>
          <Link href="/">DDIB</Link>
        </li>
        <li>
          <Link href="/products">
            {segment === "products" ? (
              <>
                <div className={styles.subTitle} style={{ fontWeight: "bold" }}>
                  TimeDeal
                </div>
              </>
            ) : (
              <>
                <div className={styles.subTitle}>TimeDeal</div>
              </>
            )}
          </Link>
        </li>
        <li>
          <Link href="https://www.naver.com">
            <div className={styles.subTitle} style={{ paddingRight: "1.5vw" }}>
              <div>BIDD</div>
              {/* <div className={styles.goIcon}>
                <HiArrowTopRightOnSquare />
              </div> */}
            </div>
          </Link>
        </li>
        <li className={styles.search}>
          <Link href="/search">
            {segment === "search" ? (
              <>
                <IoSearch className={styles.icons} />
              </>
            ) : (
              <>
                <IoSearchOutline className={styles.icons} />
              </>
            )}
          </Link>
        </li>

        {me?.id && (
          <li>
            <div
              className={styles.alarm}
              onClick={() => setBellOn((prev) => !prev)}
            >
              {bellOn ? (
                <GoBellFill className={styles.icons} />
              ) : (
                <GoBell className={styles.icons} />
              )}
            </div>
            {bellOn && (
              <div className={styles.alarmModal}>
                <Alarm />
              </div>
            )}
          </li>
        )}
        <li>
          {me?.id && segment === "mypage" ? (
            <>
              <Link href="/mypage">
                <div>
                  <GoPersonFill className={styles.icons} />
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/mypage">
                <div onClick={kakaoLogin}>
                  <GoPerson className={styles.icons} />
                </div>
              </Link>
            </>
          )}
        </li>
      </div>
    </>
  );
}
