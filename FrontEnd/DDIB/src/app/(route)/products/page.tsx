import styles from "./productList.module.scss";
import WeeklyDeal from "./_components/WeeklyDeal";
import Category from "./_components/Category";

export default function ProductList() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.title}>Weekly Deal</div>
        <WeeklyDeal />
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.titleTwo}>Category</div>
        <div className={styles.category}>
          <div>All</div>
          <div>Fashion</div>
          <div>Beauty</div>
          <div>Food</div>
          <div>Appliance</div>
          <div>Sports</div>
          <div>Living</div>
          <div>Pet</div>
          <div>Travel</div>
        </div>
        <div className={styles.categoryArea}>
          <Category />
        </div>
      </div>
    </div>
  );
}
