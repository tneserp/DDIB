import Image from "next/image";
import styles from "./page.module.scss";
import CheckToken from "@/app/_components/CheckToken";

export default function Home() {
  return (
    <>
      <CheckToken />
      <main className={styles.main}>
        <div>메인</div>
      </main>
    </>
  );
}
