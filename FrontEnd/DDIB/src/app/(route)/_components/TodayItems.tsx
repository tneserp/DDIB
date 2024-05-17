import styles from "./todayItem.module.scss";
import { Product } from "@/app/_types/types";

interface Props {
  todayList: Product[];
}

export default function TodayItems({ todayList }: Props) {
  return <div className={styles.main}></div>;
}
