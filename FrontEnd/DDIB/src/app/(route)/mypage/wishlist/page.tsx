import ProductItem from "@/app/_components/ProductItem";
import product from "../../../../../public/product.webp";
import Link from "next/link";
import styles from "./wishList.module.scss";

export default function WishList() {
  const likeList = [
    {
      productId: 1,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱",
      eventStartTime: "2024-04-24T18:00:00.000+00:00",
      eventEndTime: "2024-04-24T21:00:00.000+00:00",
      price: 10000,
      totalStock: 1000,
      stock: 10,
      discount: 10.0,
    },
    {
      productId: 2,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱",
      eventStartTime: "2024-04-24T18:00:00.000+00:00",
      eventEndTime: "2024-04-24T21:00:00.000+00:00",
      price: 10000,
      totalStock: 1000,
      stock: 10,
      discount: 10.0,
    },
    {
      productId: 3,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱",
      eventStartTime: "2024-04-24T18:00:00.000+00:00",
      eventEndTime: "2024-04-24T21:00:00.000+00:00",
      price: 10000,
      totalStock: 1000,
      stock: 10,
      discount: 10.0,
    },
    {
      productId: 4,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱",
      eventStartTime: "2024-04-24T18:00:00.000+00:00",
      eventEndTime: "2024-04-24T21:00:00.000+00:00",
      price: 10000,
      totalStock: 1000,
      stock: 10,
      discount: 10.0,
    },
    {
      productId: 5,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱",
      eventStartTime: "2024-04-24T18:00:00.000+00:00",
      eventEndTime: "2024-04-24T21:00:00.000+00:00",
      price: 10000,
      totalStock: 1000,
      stock: 10,
      discount: 10.0,
    },
    {
      productId: 6,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱",
      eventStartTime: "2024-04-24T18:00:00.000+00:00",
      eventEndTime: "2024-04-24T21:00:00.000+00:00",
      price: 10000,
      totalStock: 1000,
      stock: 10,
      discount: 10.0,
    },
    {
      productId: 7,
      thumbnailImage: product,
      companyName: "joonseoung",
      name: "맥 레트로 매트 립스틱",
      eventStartTime: "2024-04-24T18:00:00",
      eventEndTime: "2024-04-24T21:00:00",
      price: 10000,
      totalStock: 1000,
      stock: 10,
      discount: 10.0,
    },
  ];

  return (
    <div className={styles.container}>
      {likeList?.map((item) => {
        return (
          <div key={item.productId} className={styles.listItem}>
            <Link href={`/products/${item.productId}`}>
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
          </div>
        );
      })}
    </div>
  );
}
