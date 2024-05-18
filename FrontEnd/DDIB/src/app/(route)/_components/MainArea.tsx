"use client";

import styles from "./mainArea.module.scss";
import TodayItems from "./TodayItems";
import { useQuery } from "@tanstack/react-query";
import { getTodayList } from "@/app/_api/product";
import { TodayList } from "@/app/_types/types";
import MainSlider from "@/app/(route)/_components/MainSlider";

export default function MainArea() {
  const { data } = useQuery<TodayList>({
    queryKey: ["todayList"],
    queryFn: () => getTodayList(),
  });

  console.log(data);

  return (
    <div className={styles.main}>
      {data && (
        <>
          <MainSlider todayList={data.todayProducts} />
          <TodayItems todayList={data.todayNotOverProducts} />
        </>
      )}
    </div>
  );
}
