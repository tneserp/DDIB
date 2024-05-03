import AddressForm from "@/app/_components/AddressForm";
import styles from "./userInfo.module.scss";

export default function UserInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>개인정보수정</div>
      <AddressForm type="mypage" />
      <div className={styles.modifyUser}>수정하기</div>
    </div>
  );
}
