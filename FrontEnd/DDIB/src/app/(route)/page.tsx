import Image from "next/image";
import styles from "./page.module.scss";
import CheckToken from "@/app/_components/CheckToken";
import GetAlarmToken from "@/app/_components/GetAlarmToken";
import MainSlider from "../_components/MainSlider";

export default function Home() {
  return (
    <>
      {/* s<CheckToken /> */}
      <GetAlarmToken />

      <main className={styles.main}>{/* <MainSlider /> */}</main>
    </>
  );
}
