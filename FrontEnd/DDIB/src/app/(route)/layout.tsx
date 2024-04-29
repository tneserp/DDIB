import { ReactNode } from "react";
import NavMenu from "@/app/_components/NavMenu";
import styles from "./layout.module.scss";

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <>
      <div>
        <NavMenu></NavMenu>
      </div>
      <div className={styles.container}>
        {children}
        {modal}
      </div>
    </>
  );
}
