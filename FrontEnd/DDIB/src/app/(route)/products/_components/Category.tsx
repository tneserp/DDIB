import ProductItem from "@/app/_components/ProductItem";
import styles from "./category.module.scss";
import weekJson from "./weekList.json";
import product from "../../../../../public/product.webp";
import Link from "next/link";

export default function Category() {
  return (
    <div className={styles.itemArea}>
      {weekJson.weeklyData.map((item, index) => (
        <Link
          href={`/products/${item.productId}`}
          className={styles.item}
          key={index}
        >
          <ProductItem
            thumbnailImage={item.thumbnailImage}
            companyName={item.companyName}
            name={item.name}
            eventStartTime={item.eventStartTime}
            eventEndTime={item.eventEndTime}
            price={item.price}
            totalStock={item.totalStock}
            stock={item.stock}
            discount={item.discount}
          />
        </Link>
      ))}
    </div>
  );
}
