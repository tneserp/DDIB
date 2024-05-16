"use client";

import { getAlarmList } from "@/app/_api/alarm";
import styles from "./alarm.module.scss";
import { useQuery } from "@tanstack/react-query";
import { AlarmList } from "@/app/_types/types";
import Link from "next/link";

export default function Alarm() {
  const { data } = useQuery<AlarmList[]>({
    queryKey: ["orderDetail", "1"],
    queryFn: () => getAlarmList("1"),
  });

  const setDate = (date: string) => {
    const day = date.substring(0, 10);
    const time = date.substring(11, 19);
    return day + " " + time;
  };

  return (
    <div className={styles.container}>
      <div className={styles.alarm}>
        <div>키워드 알람</div>
        <div>ON</div>
        <Link href="/mypage/userinfo">
          <div>&gt;</div>
        </Link>
      </div>
      <div className={styles.textArea}>
        {data &&
          data.map((item) => (
            <div className={styles.text}>
              <div>{setDate(item.generatedTime)}</div>
              <div>{item.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
