import Image from "next/image";
import styles from "./page.module.scss";

import MainSlider from "../_components/MainSlider";

import Cookies from "js-cookie";
import GetAlarmToken from "../_components/GetAlarmToken";

export default function Home() {
  return (
    <>
      {!Cookies.get("fcm") && <GetAlarmToken />}

      <main className={styles.main}>{/* <MainSlider /> */}</main>
    </>
  );
}
