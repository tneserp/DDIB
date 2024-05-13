"use client";

import { getAlarmList } from "@/app/_api/alarm";
import styles from "./alarm.module.scss";
import { useQuery } from "@tanstack/react-query";
import { AlarmList } from "@/app/_types/types";

export default function Alarm() {
  const { data } = useQuery<AlarmList[]>({
    queryKey: ["orderDetail", 1],
    queryFn: () => getAlarmList(1),
  });

  return (
    <div className={styles.container}>
      <div>
        <div>키워드 알람</div>
        <div>ON</div>
      </div>
      <div></div>
    </div>
  );
}
