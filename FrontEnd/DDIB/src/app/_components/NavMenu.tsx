"use client";

import styles from "./navMenu.module.scss";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
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

  const me = {};

  const [bellOn, setBellOn] = useState(false);

  const kakaoLogin = () => {
    window.location.href = "http://localhost:8000/login/oauth2/code/ddib";
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
        <li className={styles.goshop}>
          <Link href="https://www.naver.com">
            <div className={styles.subTitle} style={{ paddingRight: "1.5vw" }}>
              <div>BIDD</div>
              <div className={styles.goIcon}>
                <HiArrowTopRightOnSquare />
              </div>
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
              <div onClick={kakaoLogin}>
                <GoPerson className={styles.icons} />
              </div>
            </>
          )}
        </li>
      </div>
    </>
  );
}
