import Image from "next/image";
import styles from "./page.module.scss";

import Cookies from "js-cookie";
import GetAlarmToken from "../_components/GetAlarmToken";
import MainArea from "./_components/MainArea";

export default function Home() {
  return (
    <>
      {!Cookies.get("fcm") && <GetAlarmToken />}

      <main className={styles.main}>
        <MainArea />
      </main>
    </>
  );
}
