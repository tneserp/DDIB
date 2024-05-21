import { getOrderDetail } from "@/app/_api/product";
import { useQuery } from "@tanstack/react-query";
import { Detail } from "@/app/_types/types";
import styles from "./itemDetail.module.scss";

interface Props {
  pk: number;
  title: string;
}

export default function ItemDetail({ pk, title }: Props) {
  const { data } = useQuery<Detail>({
    queryKey: ["ProductDetail", pk],
    queryFn: () => getOrderDetail(pk),
  });

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}> 주문내역 {data?.totalSoldCount}건</div>
      {data?.salesHistory && (
        <div>
          {data.salesHistory.map((item, index) => (
            <div key={index} className={styles.list}>
              <div>{item.orderId}</div>
              <div>{item.name}</div>
              <div>{item.phone}</div>
              <div>{item.orderId}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
