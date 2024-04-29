import { ReactNode } from "react";
import NavMenu from "@/app/_components/NavMenu";
import styles from "./layout.module.scss";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <div>
        <NavMenu></NavMenu>
      </div>
      <div>{children}</div>
    </>
  );
}
